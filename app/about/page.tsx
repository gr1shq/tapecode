"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Header from "../(components)/Header";
import Footer from "../(components)/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";

const skills = [
  "HTML5",
  "CSS",
  "JavaScript",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Node.js",
  "Figma",
  "Git",
  "GitHub",
  "Vercel",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Python",
];

export default function About() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);

  useEffect(() => {
    setSkillsVisible(true); // Trigger skills animation on load
    const timer = setTimeout(() => {
      setProjectsVisible(true); // Trigger projects animation after skills
    }, skills.length * 100); // Delay based on number of skills (100ms each)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />
      <section className="about-bg min-h-screen flex items-center justify-center py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Tapecode
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I’m a versatile web developer crafting modern, responsive, and SEO-friendly websites to help businesses shine online.
          </p>

          {/* Bio Section */}
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden animate-scale-in">
                <Image
                  src="/img/tapecode-logo.png"
                  alt="Tapecode logo"
                  width={96}
                  height={96}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="text-gray-800 font-bold text-base sm:text-lg mb-4">
              Hi, I’m Tapecode! I bring ideas to life with a strong foundation in web development, using tools like HTML, CSS, JavaScript, Next.js, TypeScript, and Tailwind CSS. From e-commerce platforms like Roomvibe and Tapnglow to innovative tools like SimplifAI, I build fast, user-friendly, and SEO-optimized websites that deliver results.
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              I’m passionate about turning designs into reality, whether it’s coding pixel-perfect Figma mockups or creating full-stack solutions with Node.js and Vercel. My goal is to help your business stand out with websites that are both functional and beautiful. Let’s create something extraordinary together!
            </p>
          </div>

          {/* Skills/Tech Stack */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              My Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`bg-gray-200 text-black font-bold text-center py-3 px-4 rounded-lg shadow-md transition-all duration-300 w-24 text-sm hover:scale-105 group relative flex justify-center items-center ${
                    skillsVisible ? "animate-spawn" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                  <span className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full mb-2 transition-opacity duration-200">
                    {skill === "Next.js" ? "Built 5+ production apps" : "Proficient"}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Project Highlights */}
          <div className="mb-12 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Key Projects
            </h2>
            <div className="relative border-l-2 border-gray-600 pl-6">
              {[
                {
                  name: "Roomvibe",
                  desc: "E-commerce platform built with Next.js and Tailwind CSS, delivering a seamless shopping experience.",
                },
                {
                  name: "Tapnglow",
                  desc: "E-commerce site with React and Node.js, optimized for performance and SEO.",
                },
                {
                  name: "SimplifAI",
                  desc: "Innovative tool using Next.js and Vercel for AI-driven solutions.",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`mb-6 ${projectsVisible ? "animate-slide-in-left" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="absolute -left-2 w-4 h-4 bg-gray-800 rounded-full"></span>
                  <p className="text-gray-800 font-bold text-base">{project.name}</p>
                  <p className="text-gray-600 text-base">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect with Me */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Connect with Me
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              Email:{" "}
              <a
                href="mailto:tapecode.studio@gmail.com"
                className="text-gray-800 font-semibold hover:text-black transition-colors duration-300"
              >
                tapecode.studio@gmail.com
              </a>
            </p>
            <div className="flex justify-center gap-4 sm:gap-6">
              <a
                href="https://www.linkedin.com/in/grisha-p-0a892935a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="https://x.com/tapecodeEnt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition-colors duration-300"
                aria-label="X Profile"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12">
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Ready to work together? Let’s make your vision a reality!
            </p>
            <div className="flex justify-center gap-4 sm:gap-6">
              <Link href="/contact">
                <button className="bg-gray-800 text-white text-base sm:text-lg font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
                  Get in Touch
                </button>
              </Link>
              <Link href="/projects">
                <button className="bg-gray-600 text-white text-base sm:text-lg font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
                  View Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}