import Hero from "@/components/page-sections/home/Hero"
import LetterCTA from "@/components/page-sections/home/LetterCTA"

export default function Home() {
    return (
        <main className="page-container page-top section-stack overflow-hidden pb-(--section-gap)">
            <Hero />
            <LetterCTA />
        </main>
    )
}
