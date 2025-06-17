// app/(sections)/Hero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

interface HeroProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  projectsRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
}

export default function Hero({ scrollToSection, projectsRef, contactRef }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A6E6E] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <Image
          src="/img/tapecode-logo.png"
          alt="Tapecode logo"
          width={80}
          height={80}
          className="mx-auto mb-6 rounded-full border-2 border-white"
        />
        <ReactTyped
          strings={["Hi, I’m Tapecode", "Web Developer", "Let’s Build Something Great Together"]}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="text-4xl md:text-6xl font-bold font-['Poppins']"
        />
        <p className="text-xl md:text-2xl mt-4 font-['Inter'] max-w-2xl mx-auto">
          Building fast, responsive, and SEO-friendly websites with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => scrollToSection(contactRef)}
            className="bg-[#F4A261] text-[#333333] font-bold px-6 py-3 rounded-lg hover:bg-[#E76F51] transition-all"
          >
            Contact Me
          </button>
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#0A6E6E] transition-all"
          >
            See My Work
          </button>
        </div>
      </motion.div>
    </section>
  );
}