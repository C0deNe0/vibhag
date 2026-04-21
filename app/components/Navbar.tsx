import {
    Bot,
    Calendar,
    Github,
    Linkedin,
    QrCode,
    User,
    Gamepad2,
} from "lucide-react";

export const Navbar = ({
    mode,
    setMode,
    showQR,
    setShowQR,
}: {
    mode: string;
    setMode: any;
    showQR: boolean;
    setShowQR: any;
}) => {
    const isSideMode = mode === "agent" || mode === "game";

    return (
        <nav
            className={`
        fixed z-50 border
        bg-white/75 dark:bg-zinc-900/80
        
        border-gray-200 dark:border-zinc-700
        shadow-[0_10px_40px_rgba(0,0,0,0.15)]

        flex items-center justify-center
        will-change-transform

        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

        ${isSideMode
                    ? `
              left-7 top-1/2
              -translate-y-1/2 translate-x-0
              flex-col gap-3
              px-2 py-5
              rounded-3xl
              scale-100 opacity-100
            `
                    : `
              left-1/2 bottom-6
              -translate-x-1/2 translate-y-0
              flex-row gap-4
              px-5 py-3
              rounded-full
              scale-100 opacity-100
            `
                }
      `}
        >
            {/* Soft Glow */}
            <div className="pointer-events-none absolute inset-0  rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-zinc-300/10 dark:from-white/5 dark:to-white/0" />

            {/* Toggle */}
            <button
                onClick={() =>
                    setMode(mode === "human" ? "agent" : "human")
                }
                className="relative z-10 flex h-7 w-12 rounded-full bg-zinc-200 p-1 transition-all duration-300 hover:scale-105 dark:bg-zinc-700"
            >
                <div
                    className={`
            flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${mode === "agent" ? "translate-x-5 rotate-12" : "translate-x-0 rotate-0"}
          `}
                >
                    {mode === "human" ? (
                        <User className="h-3 w-3 text-black" />
                    ) : (
                        <Bot className="h-3 w-3 text-black" />
                    )}
                </div>
            </button>

            {/* QR */}
            <button
                onClick={() => setShowQR(true)}
                className="relative z-10 rounded-full p-2 text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-black dark:text-zinc-300 dark:hover:text-white"
            >
                <QrCode className="h-5 w-5" />
            </button>

            {/* Divider */}
            <div
                className={`
          bg-zinc-300 dark:bg-zinc-700 transition-all duration-500
          ${isSideMode ? "h-px w-7" : "h-6 w-px"}
        `}
            />

            {/* GitHub */}
            <a
                href="https://github.com/C0deNe0"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 rounded-full p-2 text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-black dark:text-zinc-300 dark:hover:text-white"
            >
                <Github className="h-5 w-5" />
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/naveenhiremath1"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 rounded-full p-2 text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-black dark:text-zinc-300 dark:hover:text-white"
            >
                <Linkedin className="h-5 w-5" />
            </a>

            {/* Calendar */}
            <a
                href="https://cal.com/adi-patil/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 rounded-full p-2 text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-black dark:text-zinc-300 dark:hover:text-white"
            >
                <Calendar className="h-5 w-5" />
            </a>


        </nav>
    );
};