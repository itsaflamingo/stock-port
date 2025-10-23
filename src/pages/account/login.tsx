"use client"

export default function Login() {
    return (
        <div className="w-3/10 h-4/10 flex flex-col items-center justify-center 
        shadow-[0_5px_15px_rgba(0,0,0,0.3)] 
        dark:[box-shadow:0_5px_15px_rgba(255,255,255,0.3),_0_5px_15px_rgba(0,0,0,0.3)]
        gap-10">
            <h1 className="text-4xl font-bold">Login</h1>
            <form className="flex flex-col gap-2 w-5/7">
                <input type="email" placeholder="Email" className="border w-full p-2" />
                <input type="password" placeholder="Password" className="border w-full p-2" />
            </form>
        </div>
    );
}