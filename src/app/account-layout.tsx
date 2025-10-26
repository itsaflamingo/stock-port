import ThemeButton from "@/components/theme-button"
import Link from "next/link"

export default function AccountLayout({ children, pageName, changePageRoute }: { children: React.ReactNode, changePageRoute: string, pageName: string }) {
    return (
        <div className="w-full h-full flex flex-col justify-start align-center">
            <menu className="flex justify-end gap-2 p-2 h-15 mb-10">
                <ThemeButton />
                <div className="w-px h-8 bg-[var(--grey-border)] self-center" />
                <Link className="font-bold self-center" href={changePageRoute}>
                    {pageName}
                </Link>
            </menu>

            <main className="w-md h-5/10 flex flex-col items-center justify-center self-center
            shadow-[0_12px_20px_5px_rgba(1,1,1,0.06)]
            dark:shadow-[0_12px_20px_5px_rgba(255,255,255,0.3)]
            gap-10">{children}</main>

            <footer>{/* optional footer here */}</footer>
        </div>
    )
}