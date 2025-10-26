
type FormContainerProps = {
    form: React.ReactNode
    head?: string // 👈 add this
} & React.HTMLAttributes<HTMLDivElement>


export default function FormContainer({ form, ...props }: FormContainerProps) {
    return (
        <>
            <h1 className="text-4xl font-bold text-black dark:text-white">{props.head}</h1>
            {form}
        </>
    )
}