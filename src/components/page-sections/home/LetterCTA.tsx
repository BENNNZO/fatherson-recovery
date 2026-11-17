import Image from "next/image"

import Button from "@/components/ui/Button"
import letterImage from "@/images/letter-placeholder.png"

export default function LetterCTA() {
    return (
        <section className="bleed-x relative overflow-hidden">
            <div className="absolute inset-x-2 inset-y-0 rounded-lg bg-primary lg:inset-x-8" />

            <div className="relative overflow-hidden px-2 pt-4 pb-5 md:px-0 md:py-6 lg:grid lg:grid-cols-2 lg:py-24">
                <div className="relative h-56 rounded-lg md:h-116 md:overflow-hidden lg:absolute lg:top-12 lg:right-0 lg:h-[calc(100%-(--spacing(12)))] lg:w-1/2">
                    <Image
                        alt="Example letter with the claim number at the top right"
                        src={letterImage}
                        className="h-full w-full rounded-t-md object-cover object-top md:shadow-md"
                    />

                    <div className="absolute -inset-x-8 -bottom-px h-48 bg-linear-to-t from-4% from-primary md:hidden lg:block" />
                </div>

                <div className="relative mt-6 md:absolute md:bottom-6 md:left-0 md:mt-0 md:max-w-[calc(100%-16rem)] md:rounded-tr-lg md:bg-primary md:pt-6 md:pr-6 lg:static lg:max-w-none lg:rounded-none lg:p-0">
                    <span
                        aria-hidden
                        className="absolute bottom-full left-0 hidden size-3 bg-[radial-gradient(circle_at_100%_0%,transparent_0.75rem,var(--color-primary)_calc(0.75rem+0.5px))] md:block lg:hidden"
                    />

                    <span
                        aria-hidden
                        className="absolute bottom-0 left-full hidden size-3 bg-[radial-gradient(circle_at_100%_0%,transparent_0.75rem,var(--color-primary)_calc(0.75rem+0.5px))] md:block lg:hidden"
                    />

                    <h2 className="text-copy-bright">Got a letter from us?</h2>

                    <p className="mt-4 max-w-148 text-copy-bright lg:max-w-106">
                        Your letter has a claim number printed at the top. Enter it on our lookup page to see the name
                        and estimated amount on record.
                    </p>

                    <Button
                        href="/claim"
                        className="mt-12"
                        secondary
                    >
                        Look Up Your Claim
                    </Button>
                </div>
            </div>
        </section>
    )
}
