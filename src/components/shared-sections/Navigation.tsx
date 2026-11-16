import Link from "next/link"

import Button from "@/components/ui/Button"

export default function Navigation() {
    return (
        <nav className="page-container sticky top-0 z-30 flex flex-row items-center justify-between border-stroke border-b bg-base-100 py-4">
            <div className="absolute inset-x-0 bottom-full h-24 bg-linear-to-t from-base-100" />

            <Link
                href="/"
                className="font-serif text-h3"
            >
                FATHERSON
            </Link>

            <div className="flex flex-row items-center gap-8">
                <Link
                    href="/#how-it-works"
                    className="hover:underline"
                >
                    How It Works
                </Link>

                <Button href="/claim">Lookup Claim</Button>
            </div>
        </nav>
    )
}
