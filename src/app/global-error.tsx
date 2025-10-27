// ./src/app/global-error.js

"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    // custom logic (e.g., log the error or send it to an APM service)
    useEffect(() => {
        console.error(error);
    }, [error])

    return (
        <html>
            <body>
                <div className={"flex flex-col items-center justify-center h-screen gap-5"}>
                    <h1 className="text-9xl font-bold">500</h1>
                    <h2 className="text-5xl font-bold">Internal Error</h2>
                    <Link className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} href={"/"} onClick={() => reset()}>
                        Home Page
                    </Link>
                </div>
            </body>
        </html>
    );
}
