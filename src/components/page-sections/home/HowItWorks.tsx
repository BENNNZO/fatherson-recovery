import Button from "@/components/ui/Button"

import StepCard from "./StepCard"

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="grid scroll-mt-48 grid-cols-2"
        >
            <div>
                <h2>Two Simple Steps.</h2>

                <p className="mt-4 text-copy-light">
                    Two steps on your side of the table. Everything is in <br />
                    writing before we start.
                </p>

                <Button
                    href="#contact-us"
                    className="mt-12"
                >
                    Contact Us
                </Button>
            </div>

            <ol className="divide-y divide-stroke/50 *:py-16 *:first:pt-0 *:last:pb-0">
                <StepCard
                    stepNumber={1}
                    title="You review and sign our agreement"
                    body="A plain, short contract that names the county, the property, the amount on record and our fee of [FEE]% of funds recovered. Take your time, and ask anyone you trust to read it."
                    footer="You pay nothing unless funds are released."
                />

                <StepCard
                    stepNumber={2}
                    title="We file the paperwork with the county"
                    body="We prepare and file the claim, handle the back-and-forth with the county, and update you at each stage until a decision is made."
                    footer="Funds released to you, less our stated fee."
                />
            </ol>
        </section>
    )
}
