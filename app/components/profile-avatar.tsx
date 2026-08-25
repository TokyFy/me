'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface ProfileAvatarProps {
    src?: string
    alt?: string
    size?: number
    className?: string
    isRevealed?: boolean
}

const VERTEX_SHADER_SOURCE = `
attribute vec2 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_texCoord;
}
`

const FRAGMENT_SHADER_SOURCE = `
precision highp float;

uniform sampler2D u_image;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_hover;
uniform vec2 u_resolution;

varying vec2 v_texCoord;

void main() {
    // Clamp coordinate safely inside texture bounds
    vec2 uv = clamp(v_texCoord, 0.0001, 0.9999);

    // Hover/reveal factor (1.0 = normal/clear, 0.0 = pixelated & monochrome)
    float h = clamp(u_hover, 0.0, 1.0);
    float smoothH = smoothstep(0.0, 1.0, h);
    
    // Pixel grid density: chunky minimal blocks (16x16) scaling smoothly to crystal-clear (512x512)
    float pixelGrid = mix(16.0, 512.0, pow(smoothH, 3.0));
    
    // Safely computed pixelated UV coordinates without edge bleed or floating precision jitter
    vec2 cell = floor(uv * pixelGrid);
    vec2 pixelatedUv = clamp((cell + vec2(0.5)) / pixelGrid, vec2(0.5 / pixelGrid), vec2(1.0 - 0.5 / pixelGrid));
    
    // Interpolate between pixelated UV and crisp original UV
    vec2 activeUv = clamp(mix(pixelatedUv, uv, smoothH), 0.0001, 0.9999);
    
    // Sample texture cleanly
    vec4 texColor = texture2D(u_image, activeUv);
    
    // Grayscale luminance for pure black-and-white pixels when obscured
    float luminance = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
    vec3 monoColor = vec3(luminance);
    
    // Fade from clean monochrome pixel blocks to full original image
    vec3 finalColor = mix(monoColor, texColor.rgb, smoothH);
    
    gl_FragColor = vec4(finalColor, texColor.a);
}
`

export default function ProfileAvatar({
    src = '/me.png',
    alt = 'Toky fy',
    size = 148,
    className = '',
    isRevealed = false,
}: ProfileAvatarProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [webglSupported, setWebglSupported] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false)
    const targetHoverRef = useRef(isRevealed ? 1 : 0)

    useEffect(() => {
        targetHoverRef.current = isRevealed ? 1 : 0
    }, [isRevealed])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const gl = canvas.getContext('webgl', {
            alpha: true,
            antialias: true,
            premultipliedAlpha: false,
        })

        if (!gl) {
            setWebglSupported(false)
            return
        }

        // Helper to compile shader
        const createShader = (type: number, source: string) => {
            const shader = gl.createShader(type)
            if (!shader) return null
            gl.shaderSource(shader, source)
            gl.compileShader(shader)
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                gl.deleteShader(shader)
                return null
            }
            return shader
        }

        const vertShader = createShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE)
        const fragShader = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE)

        if (!vertShader || !fragShader) {
            setWebglSupported(false)
            return
        }

        const program = gl.createProgram()
        if (!program) {
            setWebglSupported(false)
            return
        }

        gl.attachShader(program, vertShader)
        gl.attachShader(program, fragShader)
        gl.linkProgram(program)

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            gl.deleteProgram(program)
            setWebglSupported(false)
            return
        }

        gl.useProgram(program)

        // Geometry: Full-screen quad
        const positionBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
        // Two triangles covering NDC [-1, 1]
        const positions = new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1,
        ])
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

        const positionLocation = gl.getAttribLocation(program, 'a_position')
        gl.enableVertexAttribArray(positionLocation)
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

        // Texture coordinates (Y flipped for WebGL)
        const texCoordBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer)
        const texCoords = new Float32Array([
            0, 1,
            1, 1,
            0, 0,
            0, 0,
            1, 1,
            1, 0,
        ])
        gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW)

        const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord')
        gl.enableVertexAttribArray(texCoordLocation)
        gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0)

        // Load image texture
        const texture = gl.createTexture()
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

        const img = new window.Image()
        img.src = src
        img.onload = () => {
            gl.bindTexture(gl.TEXTURE_2D, texture)
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
            setIsLoaded(true)
        }
        img.onerror = () => {
            setWebglSupported(false)
        }

        // Uniforms
        const timeLocation = gl.getUniformLocation(program, 'u_time')
        const mouseLocation = gl.getUniformLocation(program, 'u_mouse')
        const hoverLocation = gl.getUniformLocation(program, 'u_hover')
        const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')

        let animationFrameId: number
        let startTime = performance.now()
        let currentHover = targetHoverRef.current
        let targetMouse = { x: 0.5, y: 0.5 }
        let currentMouse = { x: 0.5, y: 0.5 }
        let isVisible = true

        // Intersection Observer to stop rendering when not visible
        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting
        })
        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        const render = (now: number) => {
            if (isVisible) {
                const elapsed = (now - startTime) / 1000
                const target = targetHoverRef.current

                // Smooth interpolation for hover and mouse position
                if (Math.abs(target - currentHover) < 0.0005) {
                    currentHover = target
                } else {
                    currentHover += (target - currentHover) * 0.08
                }
                currentMouse.x += (targetMouse.x - currentMouse.x) * 0.12
                currentMouse.y += (targetMouse.y - currentMouse.y) * 0.12

                gl.viewport(0, 0, canvas.width, canvas.height)
                gl.clearColor(0, 0, 0, 0)
                gl.clear(gl.COLOR_BUFFER_BIT)

                gl.uniform1f(timeLocation, elapsed)
                gl.uniform2f(mouseLocation, currentMouse.x, currentMouse.y)
                gl.uniform1f(hoverLocation, currentHover)
                if (resolutionLocation) {
                    gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
                }

                gl.drawArrays(gl.TRIANGLES, 0, 6)
            }

            animationFrameId = requestAnimationFrame(render)
        }

        animationFrameId = requestAnimationFrame(render)

        return () => {
            cancelAnimationFrame(animationFrameId)
            observer.disconnect()
            gl.deleteProgram(program)
            gl.deleteShader(vertShader)
            gl.deleteShader(fragShader)
            gl.deleteBuffer(positionBuffer)
            gl.deleteBuffer(texCoordBuffer)
            gl.deleteTexture(texture)
        }
    }, [src])

    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1
    const pixelWidth = Math.round(size * dpr)
    const pixelHeight = Math.round(size * dpr)

    return (
        <div
            ref={containerRef}
            id="profile-avatar-container"
            className={`relative overflow-hidden select-none transition-transform duration-300 ${className}`}
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            {/* Fallback & Initial Image */}
            <Image
                src={src}
                alt={alt}
                width={size}
                height={size}
                priority
                className={`object-cover transition-opacity duration-300 ${
                    webglSupported && isLoaded ? 'opacity-0' : 'opacity-100'
                }`}
            />

            {/* WebGL Canvas */}
            {webglSupported && (
                <canvas
                    ref={canvasRef}
                    id="profile-avatar-canvas"
                    width={pixelWidth}
                    height={pixelHeight}
                    className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            )}
        </div>
    )
}
