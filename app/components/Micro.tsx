import React from 'react';
import Link from "next/link"

type A_props  = {
    href : string,
    value : string
}

function A({href , value} : A_props) {
    return (
        <a
            className="group-hover:text-neutral-950"
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
            className="text-neutral-900 border-b border-transparent border-dashed group-hover:border-neutral-900 dark:border-neutral-300 dark:text-neutral-300"
            href={href}
        >
            {value}
        </Link>
    );
}

function Techno({name} : {name : string}) {
    return (
        <span className="text-[12px] w-max font-primary font-bold border-neutral-200 text-neutral-600 dark:border-neutral-500 dark:text-neutral-300">
            {name}
        </span>
    )
}

export {A , I , Techno}