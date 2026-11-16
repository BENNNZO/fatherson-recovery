import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Look Up Your Claim",
}

export default function ClaimPage() {
    return (
        <main className="page-container page-top section-stack overflow-hidden pb-(--section-gap)">
            <div className="mx-auto max-w-256 text-center">
                <h1>Look up claim</h1>

                <label className="mt-12 flex flex-col gap-2 text-left">
                    Claim number
                    <input
                        type="text"
                        name="claimNumber"
                        className="input-base w-full px-6 py-4"
                        placeholder="FR-2026-00123"
                    />
                </label>
            </div>
        </main>
    )
}
