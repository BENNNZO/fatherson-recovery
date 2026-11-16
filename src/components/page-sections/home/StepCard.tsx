type StepCardProps = {
    stepNumber: number
    title: string
    body: string
    footer: string
}

export default function StepCard({ stepNumber, title, body, footer }: StepCardProps) {
    return (
        <li className="grid grid-cols-[8rem_1fr] gap-x-4">
            <p
                aria-hidden
                className="font-bold font-serif text-[7rem] text-accent leading-[80%] opacity-15"
            >
                {stepNumber}.
            </p>

            <div>
                <h3 className="font-serif text-3xl">{title}</h3>
                <p className="mt-3">{body}</p>
                <p className="mt-4 text-success">{footer}</p>
            </div>
        </li>
    )
}
