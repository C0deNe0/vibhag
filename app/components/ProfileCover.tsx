// import { BrandContextMenu } from "@/components/brand-context-menu"

import { NaveenHiremathMark } from "./NaveenHiremathMark";
import { Magnet } from "./magnet";
import { cn } from "../utils/utils";
import { Sparkles } from "lucide-react";

export function ProfileCover() {
    return (
        <div
            className={cn(
                "relative isolate overflow-hidden",

                /* Size */
                "h-80 md:h-[26rem] w-full",

                /* Border + Radius */
                "rounded-3xl border border-zinc-200 dark:border-zinc-900",

                /* Layout */
                "flex items-center justify-center",

                /* Text */
                "text-black dark:text-white",

                /* Main Background */
                "bg-gradient-to-br from-white via-zinc-100 to-zinc-200",
                "dark:from-black dark:via-zinc-950 dark:to-zinc-900",

                /* Shadow */
                "shadow-[0_20px_80px_rgba(0,0,0,0.08)]",
                "dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]",

                /* Entry Animation */
                "animate-in fade-in zoom-in-95 duration-700"
            )}
        >
            {/* Dotted Grid Pattern */}
            <div
                className="
          absolute inset-0 opacity-40 dark:opacity-40
          bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)]
          [background-size:18px_18px]
          text-zinc-400 dark:text-zinc-700
        "
            />

            {/* Glow Blob Top */}
            <div
                className="
          absolute -top-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full
          bg-blue-500/10 blur-3xl
        "
            />

            {/* Glow Blob Bottom */}
            <div
                className="
          absolute bottom-0 right-10 h-44 w-44 rounded-full
          bg-purple-500/10 blur-3xl
        "
            />

            {/* Top Label */}
            <div
                className="
          absolute top-5 left-5
          rounded-full border border-zinc-200 dark:border-zinc-800
          bg-white/70 dark:bg-zinc-900/70
          px-4 py-2 backdrop-blur-md
          text-xs font-medium tracking-wide
          text-zinc-600 dark:text-zinc-400
        "
            >
                Portfolio • Developer
            </div>

            {/* Main Logo */}
            <Magnet magnetStrength={3}>
                <div className="relative group cursor-pointer">
                    {/* Outer Glow */}
                    <div
                        className="
              absolute inset-0 scale-125 rounded-full
              bg-white/20 dark:bg-white/5 blur-2xl
              transition-all duration-500 group-hover:scale-150
            "
                    />

                    <NaveenHiremathMark
                        id="js-cover-mark"
                        className="
              relative z-10 h-24 w-24 md:h-44 md:w-44
              transition-all duration-500 ease-out
              group-hover:scale-110 group-hover:-translate-y-1
              drop-shadow-[0_0_30px_rgba(255,255,255,0.12)]
            "
                    />
                </div>
            </Magnet>

            {/* Bottom Badge */}
            {/* <div
                className="
          absolute bottom-5 left-1/2 -translate-x-1/2
          flex items-center gap-2 rounded-full
          border border-zinc-200 dark:border-zinc-800
          bg-white/80 dark:bg-zinc-900/80
          px-4 py-2 backdrop-blur-md
          text-sm text-zinc-700 dark:text-zinc-300
        "
            >
                <Sparkles className="h-4 w-4 text-yellow-400" />
                Building elegant digital experiences
            </div> */}
        </div>
    );
}