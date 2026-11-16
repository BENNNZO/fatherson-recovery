import type { Metadata } from "next"
import { Cantarell, PT_Serif } from "next/font/google"

import Footer from "@/components/shared-sections/Footer"
import Navigation from "@/components/shared-sections/Navigation"

import "./globals.css"

const ptSerif = PT_Serif({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-pt-serif",
})

const cantarell = Cantarell({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-cantarell",
})

export const metadata: Metadata = {
    title: "Fatherson Recovery",
    description: "Fatherson Recovery",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${ptSerif.variable} ${cantarell.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col">
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}
