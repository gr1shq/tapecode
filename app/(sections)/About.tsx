"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

interface AboutProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export default function About({ sectionRef }: AboutProps) {
  return (
    <section id="about" ref={sectionRef} className="py-12 px-4 bg-[#F5F5F5] max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-['Poppins'] text-center mb-6 text-[#0A6E6E]"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="flex justify-center mb-6">
          <Image
            src="/img/tapecode-logo.png"
            alt="Tapecode avatar"
            width={100}
            height={100}
            className="rounded-full border-2 border-[#0A6E6E]"
          />
        </div>
        <p className="text-base font-['Inter'] mb-4 text-[#666666]">
          Hey there, I’m Tapecode—a web developer with a knack for turning ideas into vibrant, user-friendly websites. With over 4 years of experience, I’ve honed my craft using <span className="font-bold text-[#0A6E6E]">Next.js</span>, <span className="font-bold text-[#0A6E6E]">TypeScript</span>, and <span className="font-bold text-[#0A6E6E]">Tailwind CSS</span> to build everything from sleek e-commerce platforms like <a href="https://roomvibe.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#F4A261] hover:underline">Roomvibe</a> to innovative tools like <a href="https://simplifai-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#F4A261] hover:underline">SimplifAI</a>.
        </p>
        <p className="text-base font-['Inter'] mb-4 text-[#666666]">
          My journey started with a curiosity for design and code, leading me to transform Figma mockups into pixel-perfect, responsive sites. I’m passionate about creating seamless experiences that not only look great but also perform flawlessly. Whether it’s optimizing load times or crafting intuitive UI, I’m all about bringing value to users and clients.
        </p>
        <p className="text-base font-['Inter'] mb-6 text-[#666666]">
          When I’m not coding, you’ll find me exploring new design trends or brainstorming creative solutions. Let’s collaborate to build something that stands out—your vision, my code, endless possibilities!
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <SiNextdotjs className="text-[#0A6E6E] text-2xl" />
            <span className="text-sm font-['Inter'] text-[#666666]">Next.js</span>
          </div>
          <div className="flex items-center gap-2">
            <SiTypescript className="text-[#0A6E6E] text-2xl" />
            <span className="text-sm font-['Inter'] text-[#666666]">TypeScript</span>
          </div>
          <div className="flex items-center gap-2">
            <SiTailwindcss className="text-[#0A6E6E] text-2xl" />
            <span className="text-sm font-['Inter'] text-[#666666]">Tailwind CSS</span>
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <div>
            <p className="text-2xl font-bold text-[#0A6E6E]">50+</p>
            <p className="text-sm font-['Inter'] text-[#666666]">Projects Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#0A6E6E]">4+</p>
            <p className="text-sm font-['Inter'] text-[#666666]">Years of Experience</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}