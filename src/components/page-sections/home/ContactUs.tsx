import Button from "@/components/ui/Button"

export default function ContactUs() {
    return (
        <section
            id="contact-us"
            className="-mx-2 scroll-mt-48 rounded-lg bg-primary-pale px-4 py-6 sm:mx-0 md:px-8 md:py-8 lg:px-12 lg:pt-12 lg:pb-16 xl:grid xl:grid-cols-2 xl:gap-x-24"
        >
            <div>
                <h2>Questions before you start?</h2>

                <p className="mt-4 text-copy-light md:whitespace-pre-line">
                    Send us a message and we'll reply by email. If you have a claim {"\n"}
                    number from our letter, include it and we'll pull up your file.
                </p>
            </div>

            <form className="mt-20 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 xl:mt-0">
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
                        placeholder="2026-00123"
                    />
                </label>

                <label className="flex flex-col gap-2 md:col-span-2">
                    Message
                    <textarea
                        className="input-base"
                        name="message"
                        placeholder="How can we help?"
                        rows={6}
                        required
                    />
                </label>

                <Button className="mt-8 md:col-start-2">Send Message</Button>
            </form>
        </section>
    )
}
