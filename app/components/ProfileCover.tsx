// import { BrandContextMenu } from "@/components/brand-context-menu"
import { NaveenHiremathMark } from "./NaveenHiremathMark"
import { Magnet } from "./magnet"
import { cn } from "../utils/utils"

export function ProfileCover() {
  return (
    
      <div
        className={cn(
            "h-80",
          " select-none w-full border-2 border-gray-300  dark:border-gray-950",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5 mb-7"
        )}
      >
        <Magnet magnetStrength={3}>
          <NaveenHiremathMark
            id="js-cover-mark"
            className="h-24 w-24 md:h-46 md:w-46"
          />
        </Magnet>
      </div>

  )
}