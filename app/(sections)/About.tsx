// app/(sections)/About.tsx
"use client";

import { motion } from "framer-motion";

interface AboutProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export default function About({ sectionRef }: AboutProps) {
  return (
    <section id="about" ref={sectionRef} className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-['Poppins'] text-center mb-8 text-[#0A6E6E]"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-lg font-['Inter'] mb-6">
          Hi, I’m Tapecode! I’m a passionate web developer with over 4 years of experience crafting modern, responsive, and SEO-friendly websites. Using tools like Next.js, TypeScript, and Tailwind CSS, I’ve built projects like Roomvibe (e-commerce), Tapnglow (online store), and SimplifAI (AI tool) to deliver seamless digital experiences.
        </p>
        <p className="text-lg font-['Inter'] mb-6">
          My goal is to turn your ideas into reality with clean, efficient code and pixel-perfect designs. Let’s create something extraordinary together!
        </p>
        <div className="flex justify-center gap-8">
          <div>
            <p className="text-2xl font-bold text-[#0A6E6E]">50+</p>
            <p className="text-sm font-['Inter']">Projects Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#0A6E6E]">4+</p>
            <p className="text-sm font-['Inter']">Years of Experience</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}