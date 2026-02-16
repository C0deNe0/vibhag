"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "./utils/utils";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  const [time, setTime] = useState<string>("");
  const [showQR, setShowQR] = useState<boolean>(false);

  return (
    <div
      className={`relative flex  min-h-screen flex-col items-center bg-white dark:bg-black
            px-3 pt-16 text-black dark:text-white selection:bg-black selection:dark:bg-white selection:text-white selection:dark:text-black 

            pb-32 sm:px-4 sm:pt-24 sm:pb-40 overflow-x-hidden transition-colors duration-300
            `}
    >
      <div className="fixed top-6 right-6 z-10">
        <ThemeToggle />
      </div>

    
        
    </div>
  );
}

//copied from chanh dai
function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className,
      )}
    />
  );
}
