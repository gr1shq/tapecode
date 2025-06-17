// app/(sections)/Skills.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

interface Technology {
  name: string;
  icon: string;
  description: string;
}

const technologies: Technology[] = [
  {
    name: "Next.js",
    icon: "/img/next-icon.png",
    description: "Built 30+ high-performance, SEO-friendly apps with Next.js.",
  },
  {
    name: "TypeScript",
    icon: "/img/ts.png",
    description: "Typed 15+ projects for robust, maintainable codebases.",
  },
  {
    name: "Tailwind CSS",
    icon: "/img/tailwind-icon.png",
    description: "Styled 50+ responsive UIs with Tailwind’s utility-first approach.",
  },
  {
    name: "React",
    icon: "/img/react-icon.png",
    description: "Developed 65+ dynamic interfaces with React components.",
  },
  {
    name: "JavaScript",
    icon: "/img/js-icon.png",
    description: "Core language for 50+ interactive web projects.",
  },
  {
    name: "Node.js",
    icon: "/img/nodejs-icon.webp",
    description: "Created 5+ server-side APIs with Node.js and Express.",
  },
  {
    name: "MongoDB",
    icon: "/img/mongodb-icon.png",
    description: "Managed databases for 4+ scalable applications.",
  },
  {
    name: "PostgreSQL",
    icon: "/img/postgresql-icon.svg",
    description: "Designed schemas for 5+ data-driven apps.",
  },
  {
    name: "Figma",
    icon: "/img/figma-icon.svg",
    description: "Translated 20+ Figma designs to pixel-perfect code.",
  },
  {
    name: "GitHub",
    icon: "/img/github-icon.png",
    description: "Version-controlled 50+ projects with Git workflows.",
  },
  {
    name: "Vercel",
    icon: "/img/vercel-icon.png",
    description: "Deployed 15+ apps with Vercel’s seamless CI/CD.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-['Poppins'] text-center mb-8 text-[#0A6E6E]"
      >
        My Skills
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <Image
                src={tech.icon}
                alt={`${tech.name} icon`}
                width={48}
                height={48}
                className="mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-['Inter'] text-sm font-semibold text-[#333333]">{tech.name}</span>
              <div className="absolute inset-0 bg-[#0A6E6E] bg-opacity-90 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-white text-xs font-['Inter'] text-center">{tech.description}</p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}