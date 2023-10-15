import React from 'react';
import Link from "next/link"

type A_props  = {
    href : string,
    value : string
}

function A({href , value} : A_props) {
    return (
        <a
            className="underline group-hover:text-neutral-950"
            href={`https://${href}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {value}
        </a>
    );
}

function I({href , value} : A_props) {
    return (
        <Link
            className="underline text-neutral-900 group-hover:text-lime-500"
            href={href}
        >
            {value}
        </Link>
    );
}

function Techo({name} : {name : string}) {
    return (
        <div className="text-[10px] rounded px-1 py-[2px] w-max font-grotesk font-bold border border-dashed border-neutral-300 bg-gray-201 text-neutral-500">
            {name}
        </div>
    )
}

export {A , I , Techo}