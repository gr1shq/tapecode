// app/(components)/Services.tsx
"use client";

import { motion } from "framer-motion";
import { FaCode, FaBagShopping, FaRocket, FaPaintbrush } from "react-icons/fa6";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Custom Website Development",
    description: "Fast, responsive, and SEO-friendly websites using Next.js, TypeScript, and Tailwind CSS.",
    icon: <FaCode className="w-8 h-8 text-[#0A6E6E]" />,
  },
  {
    title: "E-Commerce Solutions",
    description: "Stunning online stores with product listings and cart functionality for maximum conversions.",
    icon: <FaBagShopping className="w-8 h-8 text-[#0A6E6E]" />,
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages to showcase your brand or services with modern UI.",
    icon: <FaRocket className="w-8 h-8 text-[#0A6E6E]" />,
  },
  {
    title: "UI/UX Design to Code",
    description: "Pixel-perfect, responsive websites from Figma designs with clean code.",
    icon: <FaPaintbrush className="w-8 h-8 text-[#0A6E6E]" />,
  },
];

interface ServicesProps {
  sectionRef: React.RefObject<HTMLElement>;
  scrollToContact: () => void;
}

export default function Services({ sectionRef, scrollToContact }: ServicesProps) {
  return (
    <section id="services" ref={sectionRef} className="py-16 px-4 bg-[#D1D5DB]">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-['Poppins'] text-center mb-8 text-[#0A6E6E]"
      >
        My Services
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold font-['Poppins'] mb-2">{service.title}</h3>
            <p className="text-sm font-['Inter'] mb-4">{service.description}</p>
            <button
              onClick={scrollToContact}
              className="text-[#F4A261] font-['Inter'] font-semibold hover:underline"
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}