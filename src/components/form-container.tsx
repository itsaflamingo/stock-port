
export default function FormContainer({ form }: { form: React.ReactNode }) {
    return (
        <div className="w-md h-4/10 flex flex-col items-center justify-center
        shadow-[0_12px_20px_5px_rgba(1,1,1,0.06)]
        dark:shadow-[0_12px_20px_5px_rgba(255,255,255,0.3)]
        gap-10">
            <h1 className="text-4xl font-bold text-black dark:text-white">Log In</h1>
            {form}
        </div>
    )
}