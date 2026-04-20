"use client";

import Image from "next/image";
import {
    Github,
    Linkedin,
    Calendar,
    Bot,
    User,
    QrCode,
    ArrowRight,
    Music,
    Pause,
    Globe,
    X,
    ArrowUpRight,
} from "lucide-react";
// import { FaXTwitter } from "react-icons/fa6";
import { ExperienceItem } from "./components/ExperienceItem";
import { GithubGraph } from "./components/GithubGraph";
import { TechStack } from "./components/TechStack";
import { useState, useMemo } from "react";
import { useTheme } from "next-themes";
import { QRCodeSVG } from "qrcode.react";
import { ThemeToggle } from "./components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrentTime } from "./hooks/useCurrentTime";
import { useLofiAudio } from "./hooks/useLofiAudio";
import { Navbar } from "./components/Navbar";
import { Recommendation } from "./components/Recommendation";
import { Blogs } from "./components/Blogs";
import { getMarkdownContent } from "./data/content";
import { TypingChallenge } from "./components/gameComponents/TypingChallenge";
import { SnakeGame } from "./components/gameComponents/SnakeGame";
import { cn } from "./utils/utils";
import { ProfileCover } from "./components/ProfileCover";
import { SpinningNameCube } from "./components/SpinningNameCube";

// import { PomodoroTimer } from "./components/PomodoroTimer";
// import { NeuralNetworkSim } from "./components/NeuralNetworkSim";




export default function Home() {
    const time = useCurrentTime();
    const { isLofiPlaying, lofiVolume, setLofiVolume, toggleLofi } = useLofiAudio();
    const [showQR, setShowQR] = useState(false);
    const [mode, setMode] = useState<"human" | "agent">("human");

    const { setTheme, resolvedTheme } = useTheme();

    const markdownContent = getMarkdownContent(time);

    return (
        <div
            className=" border-zinc-800  flex min-h-screen flex-col items-center bg-white dark:bg-black px-3 pt-1  text-black dark:text-white selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black pb-32 sm:px-4 sm:pt-20 sm:pb-40 overflow-x-hidden transition-colors duration-300
            "
        >


            {/* Theme Toggle in Top Right */}
            <div className="fixed top-6 right-6 z-50 ">
                <ThemeToggle />
            </div>

            <AnimatePresence mode="wait">
                {mode === "agent" ? (
                    /* Agent Mode - Markdown View */
                    <motion.main
                        key="agent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="flex w-full max-w-2xl flex-col items-start text-left px-4 sm:px-0"
                    >
                        <pre
                            className="w-full whitespace-pre-wrap font-mono text-sm leading-relaxed text-black dark:text-gray-300 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black antialiased"
                            style={{
                                fontFamily:
                                    '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Console", monospace',
                            }}
                        >
                            {/* <TypingChallenge /> */}
                            <SnakeGame />
                        </pre>
                    </motion.main>
                ) : (
                    /* Human Mode - Original View */
                    <motion.main
                        key="human"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="flex w-full border border-zinc-800 rounded-md  max-w-236 sm:px-0 md:px-5  py-3  flex-col items-center text-center [&>div]:border [&>div]:border-b-8 [&>div]:border-zinc-900 md:[&>div]:rounded-md  [&>div]:p-4 [&>div]:m-2 "
                    >
                        {/* ADD HERE THE EXTRA CONTENT AT THE FIRST LIKE CHANDAI */}
                        <ProfileCover />

                        {/* Hero Text */}
                        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
                            Naveen Hiremath
                        </h1>

                        {/* Phonetic Pronunciation (Aesthetic touch often found in minimal portfolios) */}
                        <div className="mb-8 flex flex-wrap border-yellow-200  items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500 sm:text-sm">

                            <SpinningNameCube />
                            <span className="text-gray-300 dark:text-gray-700">•</span>
                            <span>noun</span>
                            <span className="text-gray-300 dark:text-gray-700">•</span>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="tabular-nums text-xs sm:text-sm">
                                        {time || "00:00:00"}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-wider sm:text-xs">
                                        IST
                                    </span>
                                </div>

                                <span className="text-gray-300 dark:text-gray-700">•</span>

                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold uppercase tracking-tight text-gray-400">
                                        lofi
                                    </span>
                                    <button
                                        onClick={toggleLofi}
                                        className="flex h-5 w-5 items-center justify-center rounded-full transition-all hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-400 hover:text-black dark:hover:text-white"
                                        aria-label={isLofiPlaying ? "Pause Lofi" : "Play Lofi"}
                                    >
                                        {isLofiPlaying ? (
                                            <Pause size={10} fill="currentColor" />
                                        ) : (
                                            <Music size={10} />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {isLofiPlaying && (
                                            <motion.div
                                                initial={{ width: 0, opacity: 0 }}
                                                animate={{ width: 40, opacity: 1 }}
                                                exit={{ width: 0, opacity: 0 }}
                                                className="flex h-5 items-center overflow-hidden"
                                            >
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="1"
                                                    step="0.01"
                                                    value={lofiVolume}
                                                    onChange={(e) =>
                                                        setLofiVolume(parseFloat(e.target.value))
                                                    }
                                                    className="h-[2px] w-8 cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-zinc-800 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-400 dark:[&::-webkit-slider-thumb]:bg-zinc-500 hover:[&::-webkit-slider-thumb]:bg-black dark:hover:[&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:h-2 [&::-moz-range-thumb]:w-2 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gray-400 dark:[&::-moz-range-thumb]:bg-zinc-500 hover:[&::-moz-range-thumb]:bg-black dark:hover:[&::-moz-range-thumb]:bg-white transition-all"
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>


                        {/* APNE STYLE ME DALNE KA HAIN */}
                        <div className="w-full space-y-4 text-left text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">
                            <p>
                                developer. builder. curious mind.
                            </p>

                            <p>
                                building ideas into real{" "}
                                <a
                                    href="https://en.wikipedia.org/wiki/Software"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="curly-link"
                                >
                                    software
                                </a>{" "}
                                from the{" "}
                                <a
                                    href="https://en.wikipedia.org/wiki/Software_architecture"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="curly-link"
                                >
                                    systems
                                </a>{" "}
                                that run it to the{" "}
                                <a
                                    href="https://en.wikipedia.org/wiki/User_interface"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="curly-link"
                                >
                                    interfaces
                                </a>{" "}
                                people experience.
                            </p>
                        </div>

                        {/* Experience Section */}
                        <div className="mb-16 w-full text-left">
                            <h2 className="mb-6 text-md font-extrabold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                                Experience
                            </h2>
                            <div className="space-y-12">
                                <ExperienceItem
                                    title="Vithsutra Technologies"
                                    role="Golang Backend Developer"
                                    collapsible={true}
                                >
                                    <div className="space-y-2">
                                        <p>
                                            Working as a backend developer focused on building reliable and
                                            maintainable systems using Go. I contribute to the design and
                                            implementation of RESTful APIs following a clean layered architecture
                                            to ensure clarity, scalability, and long-term sustainability.
                                        </p>
                                        <p>
                                            Develop and maintain services using Echo and PostgreSQL with pgx,
                                            with careful attention to database design, query efficiency,
                                            and data integrity.
                                        </p>
                                        <p>
                                            Implement authentication and authorization mechanisms, including
                                            token-based systems, middleware, and structured logging practices
                                            to support secure and observable applications.
                                        </p>
                                        <p>
                                            Collaborate closely with frontend developers and product teams
                                            to translate business requirements into dependable backend solutions.
                                        </p>
                                    </div>
                                </ExperienceItem>

                                <ExperienceItem
                                    title="Levion Studios"
                                    role="Freelance Backend Developer"
                                    collapsible={true}
                                >
                                    <div className="space-y-2">
                                        <p>
                                            Contributed as a freelance backend developer on Agromart,
                                            an e-commerce platform designed with a production-focused architecture.
                                        </p>
                                        <p>
                                            Designed and implemented the backend using Go with a structured
                                            separation between handlers, services, repositories, and domain models
                                            to maintain clarity and consistency across the codebase.
                                        </p>
                                        <p>
                                            Built authentication flows with access and refresh tokens,
                                            role-based access control, and company approval workflows aligned
                                            with real-world business requirements.
                                        </p>
                                        <p>
                                            Developed modules for users, products, companies, and subscriptions
                                            using PostgreSQL, ensuring proper validation, transaction handling,
                                            and secure data management.
                                        </p>
                                        <p>
                                            Worked independently while coordinating with stakeholders to ensure
                                            technical decisions aligned with the overall product direction.
                                        </p>
                                    </div>
                                </ExperienceItem>
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="mb-16 w-full text-left">
                            <h2 className="mb-6 text-md font-extrabold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                                Education
                            </h2>
                            <div className="space-y-12">
                                <ExperienceItem
                                    title="Alva's Institute of Engineering and Technology"
                                    role="Computer Science and Design Engineering"
                                >
                                    <p>2022 - Surviving</p>
                                </ExperienceItem>
                            </div>
                        </div>

                        {/* Contributions Section */}
                        <div className="mb-16 w-full text-left">
                            <h2 className="mb-6 text-xs font-extrabold uppercase  tracking-widest text-gray-400 dark:text-gray-500">
                                GitHub Contributions
                            </h2>
                            <GithubGraph />
                        </div>



                        {/* Tech Stack Section */}
                        <div className="mb-16 w-full text-left">
                            <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                                Tech Stack
                            </h2>
                            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                                Over time, I’ve explored a wide range of technologies. The tools listed
                                below represent the ones I rely on most frequently when designing and
                                developing modern applications.
                            </p>
                            <TechStack />
                        </div>



                        {/* Recommendations by Clients Section */}
                        {/* <Recommendation /> */}

                        {/* Videos Section */}
                        {/* <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Explainer Videos
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                Here is how I explain complex systems on my{" "}
                <a
                  href="https://www.youtube.com/@theracecondition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  YouTube Channel
                </a>
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-950 shadow-sm transition-all hover:shadow-md grayscale hover:grayscale-0 duration-500">
                <iframe
                  src="https://www.youtube.com/embed/m84tBP_4DWE"
                  title="Explaining Complex Systems"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div> */}

                        {/* Writings & Blogs Section */}
                        <Blogs />
                        {/* 
                        <a href="https://app.daily.dev/0_naveen_0"><img src="https://api.daily.dev/devcards/v2/9fOrzy05ikhdgoaVtxTZ1.png?type=default&r=ai0" width="356" alt="Naveen's Dev Card" /></a> */}

                        {/* Get in Touch Section */}
                        <div className="mb-16 w-full text-left">
                            <h2 className="mb-6 text-md font-extrabold uppercase tracking-wider text-gray-400">
                                Get in Touch
                            </h2>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    Connect with me on{" "}
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                                    >
                                        LinkedIn
                                    </a>{" "}
                                    or shoot an{" "}
                                    <a
                                        href="mailto:[EMAIL_ADDRESS]"
                                        className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                                    >
                                        email
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Pomodoro Timer Section */}
                        {/* <PomodoroTimer /> */}
                    </motion.main>
                )}
            </AnimatePresence>

            {/* Glass Island Navbar */}
            <Navbar mode={mode} setMode={setMode} showQR={showQR} setShowQR={setShowQR} />

            {/* QR Code Modal */}
            {showQR && (
                <div
                    className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-md px-4 animate-in fade-in duration-300"
                    onClick={() => setShowQR(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] animate-in zoom-in-95 duration-300"
                    >
                        {/* Glow Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
                        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={() => setShowQR(false)}
                            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/60 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-gray-700 dark:text-gray-200 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:rotate-90"
                            aria-label="Close"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        {/* Content */}
                        <div className="relative px-8 pt-10 pb-8 text-center">
                            {/* Branding */}
                            <div className="mb-6">
                                {/* <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                                    <Globe className="h-6 w-6" />
                                </div> */}

                                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Scan to Visit
                                </h2>

                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    Open instantly on your phone
                                </p>
                            </div>

                            {/* QR Card */}
                            <div className="mx-auto mb-3 w-fit rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white p-4 shadow-inner transition-transform duration-300 hover:scale-105">
                                <QRCodeSVG
                                    value={process.env.NEXT_PUBLIC_WEBSITE_QRCODE || ""}
                                    size={220}
                                    level="H"
                                    includeMargin={false}
                                />
                            </div>

                            {/* Website URL */}
                            <p className="mb-5 text-sm font-medium text-gray-700 dark:text-gray-300 break-all">
                                {process.env.NEXT_PUBLIC_WEBSITE_QRCODE}
                            </p>

                            {/* CTA */}
                            <a
                                href={process.env.NEXT_PUBLIC_WEBSITE_QRCODE}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                            >
                                Open Website
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


function Separator({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative flex h-8 w-full border-x border-edge",
                "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
                "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
                className
            )}
        />
    )
}