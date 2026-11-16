import Button from "@/components/ui/Button"

export default function ContactUs() {
    return (
        <section
            id="contact-us"
            className="grid scroll-mt-48 grid-cols-2 gap-x-24 rounded-lg bg-primary-pale p-12 pb-16"
        >
            <div>
                <h2>Questions before you start?</h2>

                <p className="mt-4">
                    Send us a message and we'll reply by email. If you have a claim <br />
                    number from our letter, include it and we'll pull up your file.
                </p>
            </div>

            <form className="grid grid-cols-2 gap-x-4 gap-y-8">
                <label className="flex flex-col gap-2">
                    Full Name
                    <input
                        className="input-base"
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="First Last"
                        required
                    />
                </label>

                <label className="flex flex-col gap-2">
                    Email
                    <input
                        className="input-base"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="example@mail.com"
                        required
                    />
                </label>

                <label className="flex flex-col gap-2">
                    Phone (optional)
                    <input
                        className="input-base"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="(777) 777 - 7777"
                    />
                </label>

                <label className="flex flex-col gap-2">
                    Claim Number (optional)
                    <input
                        className="input-base"
                        type="text"
                        name="claimNumber"
                        placeholder="FR-2026-00123"
                    />
                </label>

                <label className="col-span-2 flex flex-col gap-2">
                    Message
                    <textarea
                        className="input-base"
                        name="message"
                        placeholder="How can we help?"
                        rows={6}
                        required
                    />
                </label>

                <Button className="col-start-2 mt-8">Send Message</Button>
            </form>
        </section>
    )
}
