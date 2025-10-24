"use client"

export default function Login() {
    return (
        <div className="w-md h-4/10 flex flex-col items-center justify-center
        shadow-[0_12px_20px_5px_rgba(1,1,1,0.06)]
        dark:shadow-[0_12px_20px_5px_rgba(255,255,255,0.3)]
        gap-10"
        >
            <h1 className="text-4xl font-bold text-black dark:text-white">Login</h1>
            <form className="flex flex-col gap-2 w-5/7">
                <input type="email" placeholder="Email" className="border border-[var(--grey-border)] w-full p-2" />
                <input type="password" placeholder="Password" className="border border-[var(--grey-border)] w-full p-2" />
            </form>
        </div>
    );
}