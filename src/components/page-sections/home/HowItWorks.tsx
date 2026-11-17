import { FileCogIcon, UserRoundPenIcon } from "lucide-react"

import Button from "@/components/ui/Button"

import StepCard from "./StepCard"

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="flex scroll-mt-48 flex-col gap-12 sm:gap-20 xl:grid xl:grid-cols-2 xl:gap-8"
        >
            <div>
                <h2 className="lg:max-w-140">Recover your surplus funds in two steps</h2>

                <p className="mt-4 text-copy-light md:whitespace-pre-line">
                    Two steps on your side of the table. Everything is in {"\n"}
                    writing before we start.
                </p>

                <Button
                    href="#contact-us"
                    className="mt-8 not-xl:hidden sm:mt-12"
                >
                    Contact Us
                </Button>
            </div>

            <ol className="divide-y divide-stroke/50 *:py-10 *:first:pt-0 *:last:pb-0 *:sm:py-16">
                <StepCard
                    Icon={UserRoundPenIcon}
                    title="You review and sign our agreement"
                    body="A plain, short contract that names the county, the property, the amount on record and our fee of [FEE]% of funds recovered. Take your time, and ask anyone you trust to read it."
                    footer="You pay nothing unless funds are released."
                />

                <StepCard
                    Icon={FileCogIcon}
                    title="We file the paperwork with the county"
                    body="We prepare and file the claim, handle the back-and-forth with the county, and update you at each stage until a decision is made."
                    footer="Funds released to you, less our stated fee."
                />
            </ol>
        </section>
    )
}
