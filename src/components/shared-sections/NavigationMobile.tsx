"use client"

import { MenuIcon, XIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function NavigationMobile() {
    const [open, setOpen] = useState(false)

    const close = () => setOpen(false)

    return (
        <nav className="sticky top-0 z-30 nav:hidden border-stroke border-b bg-base-100">
            <div className="absolute inset-x-0 bottom-full h-24 bg-linear-to-t from-base-100" />

            <div className="page-container flex flex-col py-4">
                <div className="flex flex-row justify-between">
                    <Link
                        href="/"
                        className="font-serif text-h3"
                        onClick={close}
                    >
                        FATHERSON
                    </Link>

                    <button
                        type="button"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        {open ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>

                <div
                    data-open={open ? true : undefined}
                    inert={!open}
                    className="group grid grid-rows-[0fr] transition-[grid,margin] data-open:mt-4 data-open:grid-rows-[1fr]"
                >
                    <div className="flex flex-col overflow-hidden">
                        <div className="mb-2 h-px w-full bg-stroke/0 group-data-open:bg-stroke" />

                        <Link
                            href="/#how-it-works"
                            className="py-2"
                            onClick={close}
                        >
                            How It Works
                        </Link>

                        <Link
                            href="/claim"
                            className="py-2"
                            onClick={close}
                        >
                            Look Up Claim
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
