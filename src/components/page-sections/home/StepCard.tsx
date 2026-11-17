import type { LucideIcon } from "lucide-react"

type StepCardProps = {
    title: string
    body: string
    footer: string
    Icon: LucideIcon
}

export default function StepCard({ title, body, footer, Icon }: StepCardProps) {
    return (
        <li className="group md:grid md:grid-cols-[auto_1fr] md:gap-x-8">
            <Icon className="size-7 text-copy-light group-nth-2:-translate-x-1 sm:size-8 sm:text-accent md:-translate-y-1 md:group-nth-2:translate-x-0 lg:-translate-y-0" />

            <div className="mt-4 md:mt-0">
                <h3 className="font-serif">{title}</h3>

                <p className="mt-3">{body}</p>
                <p className="mt-4 text-success">{footer}</p>
            </div>
        </li>
    )
}
