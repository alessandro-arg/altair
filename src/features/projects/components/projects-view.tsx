"use client"

import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
})

export const ProjectsView = () => {
    return (
        <div className="min-h-screen bg-sidebar flex flex-col items-center justify-center p-6 md:p-16">
            <div className="w-full max-w-sm mx-auto flex flex-col gap-4 items-center ">
                <div className="flex justify-between gap-4 w-full items-center">
                    <div className="flex items-center gap-2 w-full group/logo">
                        <img src="/logo.svg" alt="altair" className="size-[32px] md:size-[46px]" />
                        <h1 className={cn("text-4xl md:text-5xl font-semibold", font.className)}>Altair</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}