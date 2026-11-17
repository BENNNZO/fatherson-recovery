import ContactUs from "@/components/page-sections/home/ContactUs"
import Hero from "@/components/page-sections/home/Hero"
import HowItWorks from "@/components/page-sections/home/HowItWorks"
import LetterCTA from "@/components/page-sections/home/LetterCTA"

export default function Home() {
    return (
        <main className="lg:page-top section-stack overflow-hidden pb-(--section-gap)">
            <div className="page-container">
                <Hero />
            </div>

            <div className="page-container section-stack bg-base-200">
                <LetterCTA />
                <HowItWorks />
                <ContactUs />
            </div>
        </main>
    )
}
