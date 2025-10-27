// ./src/app/components/ErrorButton.js

"use client";

import { useState } from "react";

export default function ErrorButton(props: any) {
    const [raiseError, setRaiseError] = useState(false);

    if (raiseError) {
        // "a" is undefined so "props.a.b" will result in an error
        return props.a.b;
    } else {
        return (
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-5 rounded"
                onClick={() => setRaiseError((error) => !error)}
            >
                Error
            </button>
        );
    }
}
