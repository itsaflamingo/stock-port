import RegisterButton from "@/components/register-button";
import ThemeButton from "@/components/theme-button";
import Account from "@/pages/account/account";

export default function Home() {
  return (
    <>
      <menu className="flex justify-end gap-2 p-2 h-15 mb-10">
        <ThemeButton />
        <div className="w-px h-8 bg-[var(--grey-border)] self-center"></div>
        <RegisterButton />
      </menu>
      <Account />
      <footer>
      </footer>
    </>
  );
}
