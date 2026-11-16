import Link from "next/link"

import Button from "@/components/ui/Button"

export default function NavigationDesktop() {
    return (
        <nav className="sticky top-0 z-30 nav:block hidden border-stroke border-b bg-base-100">
            <div className="absolute inset-x-0 bottom-full h-24 bg-linear-to-t from-base-100" />

            <div className="page-container flex flex-row items-center justify-between py-4">
                <Link
                    href="/"
                    className="font-serif text-h3"
                >
                    FATHERSON
                </Link>

                <div className="flex flex-row items-center gap-12">
                    <Link
                        href="/#how-it-works"
                        className="hover:underline"
                    >
                        How It Works
                    </Link>

                    <Button href="/claim">Look Up Claim</Button>
                </div>
            </div>
        </nav>
    )
}
