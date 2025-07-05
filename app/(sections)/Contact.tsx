// app/(sections)/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

interface ContactProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export default function Contact({ sectionRef }: ContactProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formspree = process.env.NEXT_PUBLIC_FORMSPREE


  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };


  return (
    <section id="contact" ref={sectionRef} className="py-16 px-4 bg-[#0A6E6E] text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-['Poppins'] text-center mb-8"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto text-center w-full"
      >
        <p className="text-base font-medium mb-6 font-['Inter']">
          Have a project in mind? Let’s build something amazing together! Reach out via the form or connect with me.
        </p>
        <form
          action={`https://formspree.io/f/${formspree}`}
          method="POST"
          onSubmit={handleFormSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          {isSubmitted && (
            <p className="text-white text-sm font-semibold">
              Thank you! Your message has been sent successfully.
            </p>
          )}
          <button
            type="submit"
            className="bg-[#F4A261] text-[#333333] font-bold px-6 py-3 rounded-lg hover:bg-[#E76F51] transition-all w-full"
          >
            Send Message
          </button>
        </form>
        <div className="mt-6 flex justify-center gap-4">
          <a href="mailto:tapecode.studio@gmail.com" className="hover:text-[#F4A261] transition-colors">
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/tapecodeEnt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4A261] transition-colors"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          {/* <a
            href="https://www.linkedin.com/in/grisha-p-0a892935a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4A261] transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a> */}
        </div>
      </motion.div>
    </section>
  );
}