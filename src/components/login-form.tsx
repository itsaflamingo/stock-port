"use client"
import { useState, useEffect } from "react";

export default function LoginForm() {
    const [user, setUser] = useState<Object | null>(null);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <form className="flex flex-col gap-2 w-5/7">
            <input type="email" placeholder="Email" className="border border-[var(--grey-border)] w-full p-2"
                onChange={(e) => setUser(prevUser => (
                    { ...prevUser, username: e.target.value }
                ))} />
            <input type="password" placeholder="Password" className="border border-[var(--grey-border)] w-full p-2"
                onChange={(e) => setUser(prevUser => (
                    { ...prevUser, password: e.target.value }
                ))} />
            <div className="flex justify-between p-2">
                <span>Forgot your UserId or Password?</span>
                <button className="rounded-[3px] font-['Open_Sans',sans-serif] text-[14px] leading-[21px] text-white font-extrabold text-center uppercase px-[14px] bg-blue-500 w-2/4" onClick={() => setUser(user)}>Log In</button>
            </div>
        </form>
    )
}