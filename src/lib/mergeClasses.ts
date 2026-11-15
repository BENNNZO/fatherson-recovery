import { extendTailwindMerge } from "tailwind-merge"

export const mergeClasses = extendTailwindMerge({
    extend: {
        theme: {
            text: ["h1", "h1-large", "h2", "h3", "h4", "h5", "body"],
        },
    },
})
