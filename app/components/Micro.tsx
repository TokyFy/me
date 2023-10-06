import React from 'react';
import Link from "next/link"

type A_props  = {
    href : string,
    value : string
}

function A({href , value} : A_props) {
    return (
        <a
            className="underline text-neutral-900"
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


export {A , I}