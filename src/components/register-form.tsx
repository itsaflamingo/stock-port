"use client"

export default function RegisterForm() {
    return (
        <form className="flex flex-col gap-2 w-5/7">
            <input type="name" placeholder="Legal First Name" className="border border-[var(--grey-border)] w-full p-2"
                onChange={(e) => console.log(e.target.value)} />
            <input type="last name" placeholder="Legal Last Name" className="border border-[var(--grey-border)] w-full p-2"
                onChange={(e) => console.log(e.target.value)} />
            <input type="email" placeholder="Email" className="border border-[var(--grey-border)] w-full p-2"
                onChange={(e) => console.log(e.target.value)} />
            <input type="password" placeholder="Password" className="border border-[var(--grey-border)] w-full p-2"
                onChange={(e) => console.log(e.target.value)} />
            <div className="flex justify-between p-2">
                <span>Forgot your UserId or Password?</span>
                <button className="rounded-[3px] font-['Open_Sans',sans-serif] text-[14px] leading-[21px] text-white font-extrabold text-center uppercase px-[14px] bg-blue-500 w-2/4" onClick={(e) => console.log('register')}>Log In</button>
            </div>
        </form>
    )
}