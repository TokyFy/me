import React from 'react';

type A_props  = {
    href : string,
    value : string
}

function A({href , value} : A_props) {
    return (
        <a
            className="underline"
            href={`https://${href}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {value}
        </a>
    );
}

export {A}