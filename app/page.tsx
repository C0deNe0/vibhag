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
} from "lucide-react";
// import { FaXTwitter } from "react-icons/fa6";
import { ExperienceItem } from "./components/ExperienceItem";
import { GithubGraph } from "./components/GithubGraph";
import { TechStack } from "./components/TechStack";
import { useState, useEffect, useMemo, useRef } from "react";
import { useTheme } from "next-themes";
import { QRCodeSVG } from "qrcode.react";
import { ThemeToggle } from "./components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Recommendation } from "./components/Recommendation";
import { Blogs } from "./components/Blogs";
import { getMarkdownContent } from "./data/content";
import { TypingChallenge } from "./components/gameComponents/TypingChallenge";
import { SnakeGame } from "./components/gameComponents/SnakeGame";
import { cn } from "./utils/utils";
import { ProfileCover } from "./components/ProfileCover";

// import { PomodoroTimer } from "./components/PomodoroTimer";
// import { NeuralNetworkSim } from "./components/NeuralNetworkSim";




export default function Home() {
  const [time, setTime] = useState<string>("");
  const [showQR, setShowQR] = useState(false);
  const [mode, setMode] = useState<"human" | "agent">("human");

  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

    const markdownContent = getMarkdownContent(time);

  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isLofiPlaying, setIsLofiPlaying] = useState(false);
  const [lofiVolume, setLofiVolume] = useState(1);
  const lofiRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (lofiRef.current) {
      lofiRef.current.volume = lofiVolume;
    }
  }, [lofiVolume]);

  useEffect(() => {
    return () => {
      if (lofiRef.current) {
        lofiRef.current.pause();
        lofiRef.current = null;
      }
    };
  }, []);

  const toggleLofi = () => {
    if (!lofiRef.current) {
      lofiRef.current = new Audio("/lofi.mp3");
      lofiRef.current.loop = true;
      lofiRef.current.volume = lofiVolume;
    }

    if (isLofiPlaying) {
      lofiRef.current.pause();
    } else {
      lofiRef.current
        .play()
        .catch((e) => console.error("Lofi play failed:", e));
    }
    setIsLofiPlaying(!isLofiPlaying);
  };

    const starPositions = useMemo(() => {
      return [...Array(50)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 5,
      }));
    }, []);

  return (
    <div
      className={`relative flex min-h-screen flex-col items-center bg-white dark:bg-black px-3 pt-16 text-black dark:text-white selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black pb-32 sm:px-4 sm:pt-24 sm:pb-40 overflow-x-hidden transition-colors duration-300`}
    >
      

      {/* Theme Toggle in Top Right */}
      <div className="fixed top-6 right-6 z-50">
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
            className="flex w-full max-w-2xl flex-col items-center text-center"
          >
           {/* ADD HERE THE EXTRA CONTENT AT THE FIRST LIKE CHANDAI */}
            <ProfileCover />
    
            {/* Hero Text */}
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
              Naveen Hiremath
            </h1>

            {/* Phonetic Pronunciation (Aesthetic touch often found in minimal portfolios) */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500 sm:text-sm">
              <span>/əˈdɪtjə pɑːˈtiːl/</span>
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

            <div className="w-full space-y-4 text-left text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">
              <p>
                a full-stack developer and{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Product_design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors"
                >
                  product builder
                </a>{" "}
                with deep experience across engineering, product strategy, and
                user-centric design.
              </p>
              <p>
                a{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Polymath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors"
                >
                  polymath
                </a>{" "}
                who bridges technical architecture with business outcomes to
                create impactful, scalable solutions.
              </p>
            </div>

            {/* <NeuralNetworkSim /> */}

            {/* Experience Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Experience
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="Entrepreneur First"
                  role="Founder in Residence, Bengaluru"
                  collapsible={true}
                  link="https://www.joinef.com/"
                >
                  <div className="space-y-2">
                    <p>
                      As a Founder in Residence at Entrepreneurs First (EF), a
                      premier global talent investor and startup accelerator
                      known for backing exceptional individuals to build
                      transformative companies from scratch, I am fully immersed
                      in designing and developing cutting-edge Agentic AI
                      systems.
                    </p>
                    <p>
                      Actively building autonomous, goal-driven AI agents that
                      shift from suggestion-based tools to proactive execution,
                      enabling seamless human-AI collaboration and redefining
                      task automation, decision-making, and operations.
                    </p>
                    <p>
                      Driving a bold vision for the future of computing: making
                      traditional web browsing obsolete, turning personal data
                      into the primary interface (your "homepage"), and
                      empowering agentic systems to independently handle complex
                      responsibilities.
                    </p>
                    <p>
                      Hustling full-time in a high-intensity, ambition-fueled
                      environment surrounded by world-class cofounders, mentors,
                      and resources - leveraging EF's structured support
                      (including coaching, community, and potential funding
                      pathways) to explore, validate, and iterate ideas at pace.
                    </p>
                    <p>
                      Positioning myself at the forefront of a paradigm shift in
                      AI, tackling hard technical and conceptual challenges to
                      create meaningful, scalable impact in the emerging agentic
                      era.
                    </p>
                    <p>
                      This role highlights my entrepreneurial drive, deep
                      technical expertise in AI systems, and commitment to
                      pioneering the next wave of intelligent, autonomous
                      technology.
                    </p>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="Google Summer of Code 2025"
                  role="Emory University School of Medicine, Atlanta, USA"
                  collapsible={true}
                  link="https://minimalistbook.com/gsoc-final-report-2025/"
                >
                  <div className="space-y-2">
                    <p>
                      Designed and developed a comprehensive system for managing
                      Access Control List (ACL) permissions across multiple
                      Linux file system servers, including NFS and BeeGFS,
                      demonstrating expertise in large-scale distributed systems
                      and secure file management.
                    </p>
                    <p>
                      Built a robust backend capable of processing millions of
                      permission change requests, showcasing proficiency in
                      high-performance computing and scalability.
                    </p>
                    <p>
                      Implemented two Linux systemd daemons communicating via
                      Unix sockets: one for gRPC-based backend interactions and
                      another for executing ACL changes, highlighting skills in
                      daemon development, inter-process communication, and
                      system-level programming.
                    </p>
                    <p>
                      Created a user-friendly Next.js frontend enabling secure
                      login, backend communication, and scheduling of permission
                      requests, illustrating full-stack development capabilities
                      and focus on intuitive user experiences.
                    </p>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="Professional Freelancer (Technical GTM)"
                  role="Technical Writer, Tel Aviv, Israel"
                  collapsible={true}
                  link="https://www.upwork.com/freelancers/~0172a072394ece49bb?viewMode=1"
                >
                  <div className="space-y-2">
                    <p>
                      Authored comprehensive, highly technical documentation
                      (50+ pages) for a Software Composition Analysis (SCA)
                      tool, including detailed guides on advanced features such
                      as reachability analysis - focusing on identifying truly
                      exploitable vulnerabilities in open-source dependencies to
                      reduce noise and prioritize remediation in secure software
                      development lifecycles.
                    </p>
                    <p>
                      Ghostwrote in-depth content on Reachability Analysis for
                      the CTO of a security company, explaining how it enhances
                      SCA by determining whether detected vulnerabilities are
                      actually reachable and exploitable in the application's
                      codebase - delivering clear, authoritative thought
                      leadership material suitable for blogs, whitepapers, or
                      technical marketing.
                    </p>
                    <p>
                      Deployed and configured Flipt (an open-source, Git-native
                      feature flagging platform) on cloud infrastructure to
                      support video production workflows for a feature flagging
                      provider; troubleshot and resolved operational issues to
                      ensure reliable, production-ready performance in a dynamic
                      environment.
                    </p>
                    <p>
                      Developed custom scraping tools for a proxy provider
                      targeting real estate platforms, enabling efficient data
                      extraction while adhering to technical and ethical
                      constraints; rapidly produced high-quality articles and
                      technical write-ups on the tools, scraping methodologies,
                      and platform integrations to support knowledge sharing and
                      client deliverables.
                    </p>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="Engineering Intern"
                  role="Athena Consulting Ltd. Dubai"
                  collapsible={true}
                >
                  <div className="space-y-2">
                    <p>
                      Led the complete system design and deployment architecture
                      for Eumlet, a UAE-based B2B Web3 payments and financial
                      platform (built on Next.js), on AWS infrastructure.
                      Configured Debian EC2 instances, Application Load Balancer
                      (ALB), and NGINX reverse proxy under senior guidance -
                      ensuring high availability, scalability, and secure
                      handling of financial transactions in a regulated
                      environment.
                    </p>
                    <p>
                      Engineered automated CI/CD pipelines using GitHub Actions
                      for seamless build, test, and deployment workflows, with
                      direct integration and manual orchestration to EC2 targets
                      - demonstrating strong expertise in modern DevOps
                      practices, infrastructure as code principles, and
                      zero-downtime deployments for production fintech
                      applications.
                    </p>
                    <p>
                      Managed a team of 4 developers while simultaneously
                      supporting two high-value clients: Lunarspace and
                      Concordium (a privacy-focused Layer-1 blockchain platform)
                      - balancing tight deadlines, client expectations, and
                      resource constraints in a fast-paced environment. Authored
                      comprehensive legal and technical developer handbooks to
                      standardize onboarding, compliance, and best practices for
                      new recruits.
                    </p>
                    <p>
                      Collaborated remotely with BGTrade (China-based financial
                      platform team) on global security audits and production
                      deployments of sensitive financial systems - coordinating
                      across time zones and cultures to identify
                      vulnerabilities, implement hardening measures, and ensure
                      secure, compliant rollouts in cross-border fintech
                      ecosystems.
                    </p>
                  </div>
                </ExperienceItem>
              </div>
            </div>

            {/* In Between These Experiences Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                In Between These Experiences
              </h2>
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
                <ExperienceItem
                  title="The Product Building Journey"
                  role=""
                  collapsible={true}
                >
                  <div className="space-y-4">
                    <p>
                      I've been building and experimenting on the product side
                      for a long time. Each previous product always feels naive
                      in hindsight, but looking back, I can see they were
                      incrementally better, each iteration teaching me something
                      new about users, infrastructure, and what it takes to
                      build something people actually want.
                    </p>

                    <p>
                      It started with{" "}
                      <span className="font-medium">MetaWiper</span> during my
                      sophomore year, a tool that cleaned image metadata. No one
                      would use it, but I was proud. It was my first real
                      attempt at shipping something complete.
                    </p>

                    <p>
                      Next came <span className="font-medium">Stockic</span>, a
                      news app where I spent months doing serious infrastructure
                      work. This was where I learned to build systems that could
                      scale, not just features that looked good.
                    </p>

                    <p>
                      Then I worked on{" "}
                      <span className="font-medium">Gloss Card</span>, and for
                      the first time, a customer actually wanted to buy it for
                      their product. That validation, knowing someone saw enough
                      value to pay, was a turning point.
                    </p>

                    <p>
                      After that, I built{" "}
                      <span className="font-medium">NeuraLeap</span>, where I
                      had the most meaningful user interactions yet, HRs from
                      established firms. I worked on data pipelines capable of
                      handling 50 million LinkedIn profiles and processing them
                      with AI. The scale was different, the stakes were higher,
                      and the technical challenges forced me to level up.
                    </p>

                    <p>
                      Most recently, I worked on{" "}
                      <span className="font-medium">Meteor</span>, an AI SEO
                      toolkit at Entrepreneurs First. This time, my product was
                      being used by 6 YC-backed companies. Real users. Real
                      traction. Real feedback loops.
                    </p>

                    <p className="font-medium text-black">
                      So yes, hard work and consistency pay off. Each product
                      was a step forward, even when it didn&apos;t feel like it
                      at the time.
                    </p>
                  </div>
                </ExperienceItem>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Education
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="National Institute of Technology Hamirpur"
                  role="Electrical Engineering"
                >
                  <p>2022 - Surviving</p>
                </ExperienceItem>
              </div>
            </div>

            {/* Contributions Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                GitHub Contributions
              </h2>
              <GithubGraph />
            </div>

            {/* Research Publications Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Research Publications
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="Cross-Compatible Encryption Adapter for Securing Legacy Modbus Devices"
                  role=""
                  collapsible={true}
                  collapsedHeight="max-h-40"
                >
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                        2025 17th International Conference on COMmunication
                        Systems and NETworks (COMSNETS)
                      </p>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Authors: Naveen Hiremath
                        </p>
                        <a
                          href="https://doi.org/10.1109/COMSNETS63942.2025.10885597"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-medium text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          View Publication
                        </a>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold">
                        Abstract
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Supervisory Control and Data Acquisition systems are the
                        backbone of managing critical infrastructure in modern
                        industrial control systems, spanning sectors from power
                        generation to logistics. However, these systems face
                        significant challenges due to threats from malicious
                        actors. The Modbus protocol, despite its known lack of
                        security features, is still used in many industries
                        managing critical infrastructure due to the high cost of
                        replacing existing systems. As a result, these legacy
                        systems remain vulnerable to potentially damaging
                        threats. This paper proposes an adapter device for
                        enhancing the security of the Modbus protocol without
                        replacing devices in legacy systems. The proposed
                        adapter is cost-efficient, provides cross-platform
                        support, and is easy to install, update, and maintain.
                      </p>
                    </div>
                  </div>
                </ExperienceItem>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Tech Stack
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                I&apos;m a generalist at heart who can build with anything, but
                here&apos;s the core stack I&apos;ve spent the most time with:
              </p>
              <TechStack />
            </div>



            {/* Recommendations by Clients Section */}
            <Recommendation />

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

            {/* Thing about me Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Thing about me
              </h2>
              <div className="space-y-6">
                <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  Beyond engineering and build systems, I find balance in the
                  tactile and the thoughtful. Whether it&apos;s exploring the
                  nuances of complex architectures or spending time in the real
                  world, my approach to life is driven by curiosity and a desire
                  to understand how things work at their core.
                </p>

                <div className="flex justify-center">
                  <div
                    className="relative h-[250px] w-full max-w-sm grayscale hover:grayscale-0 transition-all duration-700 sm:h-[350px]"
                    style={{
                      maskImage:
                        "radial-gradient(circle, black 40%, transparent 95%)",
                      WebkitMaskImage:
                        "radial-gradient(circle, black 40%, transparent 95%)",
                    }}
                  >
                    <Image
                      src="/casual.png"
                      alt="Casual photo"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </div>

                <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  I believe that the best products are built by people who have
                  a diverse range of interests. It&apos;s the unique combination
                  of technical depth and human perspective that allows us to
                  create technology that actually resonates.
                </p>
              </div>
            </div>

            {/* Get in Touch Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">
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
                    href="mailto:adityapatil24680@gmail.com"
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
     <Navbar mode={mode} setMode={setMode} showQR={showQR} setShowQR={setShowQR } />

      {/* QR Code Modal */}
      {showQR && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/20 dark:bg-white/5 backdrop-blur-sm"
          onClick={() => setShowQR(false)}
        >
          <div
            className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQR(false)}
              className="absolute -right-3 -top-3 rounded-full bg-black dark:bg-white p-2 text-white dark:text-black transition-transform hover:scale-110"
              aria-label="Close"
            >
              {/* <X className="h-4 w-4" /> */}
            </button>
            <div className="rounded-lg bg-white p-2">
              <QRCodeSVG
                value="https://www.justaditya.com/"
                size={200}
                level="H"
                includeMargin={false}
              />
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