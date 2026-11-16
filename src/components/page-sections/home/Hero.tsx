import Image from "next/image"

import Button from "@/components/ui/Button"
import heroImage from "@/images/hero.png"

export default function Hero() {
    return (
        <section className="grid grid-cols-2 items-center gap-x-48">
            <div>
                <h1 className="text-h1-large">Your funds, recovered.</h1>

                <p className="mt-6 max-w-128 text-copy-light">
                    A father-and-son firm helping Georgia families recover surplus funds the county is holding in their
                    name. <strong>We handle the paperwork and file the claim for you.</strong>
                </p>

                <div className="mt-16 flex flex-row gap-4">
                    <Button href="/claim">Look Up Your Claim</Button>

                    <Button
                        href="#how-it-works"
                        secondary
                    >
                        How It Works
                    </Button>
                </div>
            </div>

            <figure>
                <Image
                    alt=""
                    src={heroImage}
                    className="rounded-lg"
                    preload
                />

                <figcaption className="mt-2 text-copy-light">
                    Founders: Benjamin Phillips Sr. and Benjamin Phillips Jr.
                </figcaption>
            </figure>
        </section>
    )
}
