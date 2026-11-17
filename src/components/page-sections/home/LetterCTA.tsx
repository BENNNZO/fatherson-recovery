import Image from "next/image"

import Button from "@/components/ui/Button"
import letterImage from "@/images/letter-placeholder.png"

export default function LetterCTA() {
    return (
        <section className="bleed-x relative overflow-hidden">
            <div className="absolute inset-x-8 inset-y-0 rounded-lg bg-primary" />

            <div className="relative grid grid-cols-2 py-24">
                <div className="absolute bottom-0 left-[calc(50%-4rem)] z-10 h-32 w-[calc(50%+8rem)] bg-linear-to-t from-primary" />

                <div>
                    <h2 className="text-copy-bright">Got a letter from us?</h2>

                    <p className="mt-4 max-w-106 text-copy-bright">
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

                <Image
                    alt="Example letter with the claim number at the top right"
                    src={letterImage}
                    className="absolute top-20 right-0 w-1/2 rounded-lg shadow-sm"
                />
            </div>
        </section>
    )
}
