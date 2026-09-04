import { MongoClient, Db, MongoServerError } from 'mongodb'

let client: MongoClient | null = null
let clientPromise: Promise<MongoClient> | null = null

declare global {
    // eslint-disable-next-line no-var
    var _mongoClientPromise: Promise<MongoClient> | undefined
    // eslint-disable-next-line no-var
    var _lastMongoError: string | null | undefined
}

export function isMongoConfigured(): boolean {
    const uri = process.env.MONGODB_URI
    return Boolean(uri && uri.trim().length > 0)
}

export interface UriCoherenceReport {
    isConfigured: boolean
    protocol?: string
    hasCredentials?: boolean
    hasPlaceholder?: boolean
    hasUnencodedAt?: boolean
    hasUnencodedSpecialChars?: boolean
    hostRecognized?: boolean
    issues: string[]
    recommendations: string[]
}

export function checkMongoUriCoherence(): UriCoherenceReport {
    const uri = (process.env.MONGODB_URI || '').trim()
    const issues: string[] = []
    const recommendations: string[] = []

    if (!uri) {
        return {
            isConfigured: false,
            issues: ['MONGODB_URI environment variable is empty or not set.'],
            recommendations: ['Add your MongoDB connection string in Settings under MONGODB_URI.'],
        }
    }

    // Protocol check
    let protocol = ''
    if (uri.startsWith('mongodb+srv://')) {
        protocol = 'mongodb+srv://'
    } else if (uri.startsWith('mongodb://')) {
        protocol = 'mongodb://'
    } else {
        issues.push('URI must start with "mongodb+srv://" or "mongodb://".')
        recommendations.push('Prefix your connection string with mongodb+srv:// or mongodb://.')
    }

    // Placeholder check: <password>, <username>, <dbname>, etc.
    const hasPlaceholder = /<[^>]+>/.test(uri) || uri.includes('<password>') || uri.includes('<username>')
    if (hasPlaceholder) {
        issues.push('URI contains literal angle brackets "<...>" (e.g. <password>).')
        recommendations.push(
            'Replace "<password>" with your real password, removing the "<" and ">" characters.'
        )
    }

    // Parse auth and host
    const afterProtocol = protocol ? uri.slice(protocol.length) : uri
    const atCount = (afterProtocol.match(/@/g) || []).length
    const hasUnencodedAt = atCount > 1
    if (hasUnencodedAt) {
        issues.push('Multiple "@" symbols detected in URI. If your password contains "@", it must be URL-encoded as "%40".')
        recommendations.push('Replace any "@" in your password with "%40".')
    }

    let hasCredentials = false
    let hasEmptyPassword = false
    let hasUnencodedSpecialChars = false
    let hostRecognized = false

    if (atCount >= 1) {
        const lastAtIndex = afterProtocol.lastIndexOf('@')
        const authPart = afterProtocol.slice(0, lastAtIndex)
        const hostAndRest = afterProtocol.slice(lastAtIndex + 1)

        const colonIndex = authPart.indexOf(':')
        if (colonIndex !== -1) {
            hasCredentials = true
            const passwordPart = authPart.slice(colonIndex + 1)
            if (!passwordPart) {
                hasEmptyPassword = true
                issues.push('The password section in the connection string is empty.')
                recommendations.push('Provide a non-empty password for the database user.')
            } else {
                // Check unencoded characters in password
                if (/[#%&/:? ]/.test(passwordPart) && !passwordPart.includes('%')) {
                    hasUnencodedSpecialChars = true
                    issues.push('Special characters (#, %, &, /, :) in password should be URL-encoded.')
                    recommendations.push(
                        'URL-encode special characters in password (e.g. "#" -> "%23", "%" -> "%25", "&" -> "%26", ":" -> "%3A").'
                    )
                }
            }
        } else {
            issues.push('No password separator ":" found in credentials section.')
            recommendations.push('Ensure format is mongodb+srv://username:password@cluster...')
        }

        if (hostAndRest.includes('.')) {
            hostRecognized = true
        } else {
            issues.push('Cluster host not clearly recognized after "@".')
            recommendations.push('Ensure cluster hostname (e.g. cluster0.xxxx.mongodb.net) follows the "@".')
        }
    } else if (protocol) {
        issues.push('No "@" separator found separating credentials from host.')
        recommendations.push('Ensure format is mongodb+srv://<username>:<password>@<host>/<database>')
    }

    return {
        isConfigured: true,
        protocol,
        hasCredentials,
        hasPlaceholder,
        hasUnencodedAt,
        hasUnencodedSpecialChars,
        hostRecognized,
        issues,
        recommendations,
    }
}

export function getMongoErrorStatus(): string | null {
    if (!isMongoConfigured()) {
        return null
    }
    const report = checkMongoUriCoherence()
    if (report.issues.length > 0) {
        return report.issues[0] + (report.recommendations[0] ? ` ${report.recommendations[0]}` : '')
    }
    return (typeof global !== 'undefined' && global._lastMongoError) || null
}

export async function getMongoClient(): Promise<MongoClient | null> {
    const uri = process.env.MONGODB_URI
    if (!uri || !uri.trim()) {
        return null
    }

    const placeholderWarning = uri.includes('<password>') || uri.includes('<username>') || /<[^>]+>/.test(uri)
    if (placeholderWarning) {
        const msg = 'MONGODB_URI contains unreplaced <password> or <username> placeholders.'
        if (typeof global !== 'undefined') {
            global._lastMongoError = msg
        }
        return null
    }

    try {
        if (process.env.NODE_ENV === 'development') {
            if (!global._mongoClientPromise) {
                const newClient = new MongoClient(uri, {
                    serverSelectionTimeoutMS: 5000,
                    connectTimeoutMS: 5000,
                })
                client = newClient
                global._mongoClientPromise = newClient.connect().catch(async (err) => {
                    global._mongoClientPromise = undefined
                    try {
                        await newClient.close()
                    } catch {
                        // ignore cleanup errors
                    }
                    throw err
                })
            }
            const connectedClient = await global._mongoClientPromise
            if (typeof global !== 'undefined') {
                global._lastMongoError = null
            }
            return connectedClient
        } else {
            if (!clientPromise) {
                const newClient = new MongoClient(uri, {
                    serverSelectionTimeoutMS: 5000,
                    connectTimeoutMS: 5000,
                })
                client = newClient
                clientPromise = newClient.connect().catch(async (err) => {
                    clientPromise = null
                    try {
                        await newClient.close()
                    } catch {
                        // ignore cleanup errors
                    }
                    throw err
                })
            }
            const connectedClient = await clientPromise
            if (typeof global !== 'undefined') {
                global._lastMongoError = null
            }
            return connectedClient
        }
    } catch (err: unknown) {
        // Reset cached promises so subsequent requests can retry with corrected credentials
        global._mongoClientPromise = undefined
        clientPromise = null
        if (client) {
            try {
                await client.close()
            } catch {
                // ignore
            }
            client = null
        }

        let friendlyError = 'Failed to connect to MongoDB.'
        if (err instanceof MongoServerError || (err instanceof Error && err.message)) {
            const msg = (err as Error).message
            if (msg.includes('bad auth') || msg.includes('authentication failed')) {
                friendlyError =
                    'MongoDB authentication failed: Please verify your username and password in MONGODB_URI. If your password contains special characters (such as @, #, %, :), make sure they are URL-encoded.'
            } else if (msg.includes('ENOTFOUND') || msg.includes('getaddrinfo') || msg.includes('queryTxt ETIMEOUT')) {
                friendlyError = 'MongoDB host lookup failed: Please verify cluster address in MONGODB_URI.'
            } else {
                friendlyError = `MongoDB error: ${msg}`
            }
        }

        if (typeof global !== 'undefined') {
            global._lastMongoError = friendlyError
        }

        console.warn(`[MongoDB Notice] ${friendlyError}`)
        return null
    }
}

export async function getMongoDb(): Promise<Db | null> {
    try {
        const clientInstance = await getMongoClient()
        if (!clientInstance) {
            return null
        }
        const dbName = process.env.MONGODB_DB && process.env.MONGODB_DB.trim()
            ? process.env.MONGODB_DB.trim()
            : undefined
        return clientInstance.db(dbName)
    } catch (err) {
        console.warn('[MongoDB Notice] Error acquiring database:', err)
        return null
    }
}
