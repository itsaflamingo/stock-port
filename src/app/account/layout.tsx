import ThemeButton from "@/components/theme-button"
import Link from "next/link"
export default function AccountLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <menu className="flex justify-end gap-2 p-2 h-15 mb-10">
                <ThemeButton />
                <div className="w-px h-8 bg-[var(--grey-border)] self-center" />
                <Link className="font-bold self-center" href="/account/register">
                    Join us
                </Link>
            </menu>

            <main>{children}</main>

            <footer>{/* optional footer here */}</footer>
        </div>
    )
}