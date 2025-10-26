import ThemeButton from "@/components/theme-button";
import Login from "@/app/account/login/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <menu className="flex justify-end gap-2 p-2 h-15 mb-10">
        <ThemeButton />
        <div className="w-px h-8 bg-[var(--grey-border)] self-center"></div>
        <Link className="font-bold self-center" href="/account/register">Join us</Link>
        {/* <RegisterButton /> */}
      </menu>
      <Login />
      <footer>
      </footer>
    </>
  );
}
