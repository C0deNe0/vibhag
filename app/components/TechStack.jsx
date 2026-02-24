"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    name: "Languages",
    skills: [
      { name: "GO", slug: "go" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Echo", slug: "Echo Golang" },
      { name: "Node.js", slug: "nodejs" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Redis", slug: "redis" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Shadcn UI", slug: "shadcnui" },
      { name: "GSAP", slug: "gsap animations" },
      { name: "Framer Motion", slug: "framer" },
    ],
  },
  {
    name: "Infra & Tools",
    skills: [
      { name: "Docker", slug: "docker" },
      { name: "AWS", slug: "AWS services" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Linux", slug: "linux" },
      { name: "Nginx", slug: "nginx" },
    ],
  },
];

const marqueeSkills = categories.map((c) => c.skills);

export function TechStack() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full space-y-4">
        <div className="flex justify-end">
            <button onClick={()=>{
                setIsExpanded(!isExpanded)
            }} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer">
                { isExpanded ?"Collapse":"Expand"}
                {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>

            <AnimatePresence mode="wait">
                {!isExpanded ?(
                    <motion.div>
                            <div></div>
                    </motion.div>
                ):(
                    <motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      
    </div>
  );
}
