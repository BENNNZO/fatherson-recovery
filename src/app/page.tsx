import Hero from "@/components/page-sections/home/Hero"
import HowItWorks from "@/components/page-sections/home/HowItWorks"
import LetterCTA from "@/components/page-sections/home/LetterCTA"

export default function Home() {
    return (
        <main className="page-container page-top section-stack overflow-hidden pb-(--section-gap)">
            <Hero />
            <LetterCTA />
            <HowItWorks />
        </main>
    )
}
