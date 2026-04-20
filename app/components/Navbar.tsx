import { Bot, Calendar, Github, Linkedin, QrCode, User } from "lucide-react"

export const Navbar = ({ mode, setMode, showQR, setShowQR }: {
    mode: string;
    setMode: any;
    showQR: boolean;
    setShowQR: any;
}) => {



    return (
        <nav className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-gray-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all hover:bg-white/90 dark:hover:bg-zinc-900 sm:gap-6 sm:px-6">
            {/* Mode Toggle Switch */}
            <div className="flex items-center">
                <button
                    onClick={() => setMode(mode === "human" ? "agent" : "human")}
                    className="group relative flex h-7 w-12 cursor-pointer rounded-full bg-gray-200 dark:bg-zinc-700 p-1 transition-colors duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-zinc-600 focus:outline-none"
                    role="switch"
                    aria-checked={mode === "agent"}
                    title={`Switch to ${mode === "human" ? "agent" : "human"} mode`}
                >
                    <div
                        className={`flex h-5 w-5 transform items-center justify-center rounded-full bg-white dark:bg-white shadow-sm transition duration-200 ease-in-out ${mode === "agent" ? "translate-x-5" : "translate-x-0"
                            }`}
                    >
                        {mode === "human" ? (
                            <User className="h-3 w-3 text-black" />
                        ) : (
                            <Bot className="h-3 w-3 text-black" />
                        )}
                    </div>
                </button>
            </div>
            <button
                onClick={() => setShowQR(true)}
                className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
                aria-label="Show QR Code"
            >
                <QrCode className="h-5 w-5" />
            </button>
            <div className="h-6 w-px bg-gray-200 dark:bg-zinc-700" />
            <a
                href="https://github.com/C0deNe0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
            >
                <Github className="h-5 w-5" />
            </a>
            <a
                href="www.linkedin.com/in/naveenhiremath1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
            >
                <Linkedin className="h-5 w-5" />
            </a>

            <a
                href="https://cal.com/adi-patil/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
            >
                <Calendar className="h-5 w-5" />
            </a>
        </nav>
    )
}


