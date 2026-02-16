"use client";

import { motion, AnimatePresence } from "framer-motion";

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
    <div>
      <div>
        <button></button>
      </div>

      <AnimatePresence mode="wait">
        {!isExpanded ? <motion.div>
            <div></div>
        </motion.div> : <motion.div></motion.div>}
      </AnimatePresence>
    </div>
  );
}
