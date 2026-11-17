import Image from "next/image"

import Button from "@/components/ui/Button"
import heroImage from "@/images/hero.png"

export default function Hero() {
    return (
        <section className="flex flex-col-reverse gap-x-12 lg:grid lg:grid-cols-2 xl:gap-x-48">
            <div className="relative z-10 -mt-16 md:mt-6 lg:mt-12">
                <h1 className="text-center text-h1-large sm:text-left">Your funds, recovered.</h1>

                <p className="mt-6 max-w-128 text-center text-copy-light sm:text-left">
                    A father-and-son firm helping Georgia families recover surplus funds the county is holding in their
                    name. <strong>We handle the paperwork and file the claim for you.</strong>
                </p>

                <div className="mt-8 flex flex-row gap-4 sm:mt-16">
                    <Button href="/claim">Look Up Claim</Button>

                    <Button
                        href="#how-it-works"
                        secondary
                    >
                        How It Works
                    </Button>
                </div>

                <div className="absolute -inset-x-24 -top-24 -z-10 h-100 rounded-t-[100%] bg-base-200 blur-3xl md:hidden" />
            </div>

            <figure className="not-lg:-mx-[calc((100vw-100cqw)/2)]">
                <Image
                    alt=""
                    src={heroImage}
                    className="not-lg:mask-b-from-[calc(100%-(--spacing(48)))] not-lg:mask-b-to-100% not-lg:mask-radial-from-65% not-lg:mask-radial-to-90% not-lg:mask-radial-at-top-right h-124 object-cover md:not-lg:object-[0rem_-2rem] lg:h-156 lg:rounded-lg"
                    preload
                />

                <figcaption className="mt-2 not-lg:hidden text-copy-light text-sm xl:text-body">
                    Founders: Benjamin Phillips Sr. and Benjamin Phillips Jr.
                </figcaption>
            </figure>
        </section>
    )
}
