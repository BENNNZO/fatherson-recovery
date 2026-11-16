import Link from "next/link"
import type { ComponentProps } from "react"

import { mergeClasses } from "@/lib/mergeClasses"

const BASE_CLASSES =
    "rounded-sm border border-primary px-6 py-3 font-semibold shadow-sm transition-[translate,filter,box-shadow] hover:brightness-125 active:translate-y-px active:brightness-95"
const PRIMARY_CLASSES = "bg-primary text-copy-bright"
const SECONDARY_CLASSES = "bg-base-100"

type BaseButtonProps = {
    secondary?: boolean
}

type ButtonProps = BaseButtonProps & ComponentProps<"button"> & { href?: never }
type LinkProps = BaseButtonProps & ComponentProps<typeof Link>

export default function Button({ secondary = false, className, ...props }: ButtonProps | LinkProps) {
    const classes = mergeClasses(BASE_CLASSES, secondary ? SECONDARY_CLASSES : PRIMARY_CLASSES, className)

    if (props.href !== undefined)
        return (
            <Link
                className={classes}
                {...props}
            />
        )

    return (
        <button
            className={classes}
            {...props}
        />
    )
}
