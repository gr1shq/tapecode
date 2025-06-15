"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeroTitle from "../(components)/HeroTitle";
import ThemeToggle from "../(components)/ThemeToggle";
import { useState, useEffect } from "react";

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "MongoDB",
  "PostgreSQL",
  "NoSQL",
  "Git",
  "GitHub",
  "Figma",
  "Vercel",
  "Python",
  "Node JS",
];

const Hero = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [portfolioVisible, setPortfolioVisible] = useState(false);

  const handleTypingComplete = () => {
    setSkillsVisible(true); // Trigger Core Skills logos spawn
  };

  // Trigger portfolio animation after Core Skills logos finish spawning
  useEffect(() => {
    if (skillsVisible) {
      const timer = setTimeout(() => {
        setPortfolioVisible(true);
      }, 800); // Delay matches Core Skills animation (4 logos * 0.2s = 0.8s)
      return () => clearTimeout(timer);
    }
  }, [skillsVisible]);

  return (
    <section className="home-bg min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center mb-4">
          <img
            src="/img/tapecode-logo.png"
            alt="Tapecode logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-600 dark:border-gray-300"
          />
        </div>
        <HeroTitle
          strings={["Hi, I’m Tapecode, a Web Developer"]}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-600 mb-4 sm:mb-6 transition-colors duration-300"
          onTypingComplete={handleTypingComplete}
        />
        <p className="text-base sm:text-md md:text-lg lg:text-xl text-gray-800 dark:text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto mt-4 transition-colors duration-300">
          I build fast, responsive, and user-friendly websites using Next.js, TypeScript, Tailwind CSS, and React.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="/contact" aria-label="Contact me to hire">
            <button className="bg-gray-900 text-white text-base sm:text-lg md:text-xl font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:bg-gray-700 shadow-md dark:bg-gray-800 dark:hover:bg-gray-600">
              Hire Me
            </button>
          </Link>
          <Link href="/projects" aria-label="View my projects">
            <button className="bg-blue-900 text-white text-base sm:text-lg md:text-xl font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:bg-blue-700 shadow-md dark:bg-blue-800 dark:hover:bg-blue-600">
              See My Work
            </button>
          </Link>
        </div>
        <div className="mt-12 sm:mt-16 mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-600 mb-2 sm:mb-4 transition-colors duration-300">
            My Core Skills
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {[
              { name: "Next.js", src: "/img/next-icon.png", alt: "Next.js logo" },
              { name: "TypeScript", src: "/img/ts.png", alt: "TypeScript logo" },
              { name: "Tailwind CSS", src: "/img/tailwind-icon.png", alt: "Tailwind CSS logo" },
              { name: "React", src: "/img/react-icon.png", alt: "React logo" },
            ].map((skill, index) => (
              <img
                key={index}
                src={skill.src}
                alt={skill.alt}
                className={`w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full p-2 transition-transform duration-300 hover:scale-105 ${
                  skillsVisible ? "animate-spawn" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </div>
        </div>
        {/* Portfolio Preview */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: "/projects/nike/hero.png", alt: "Nike portfolio mockup" },
            { src: "/projects/hiking/hero.png", alt: "Hiking portfolio mockup" },
            { src: "/projects/consoles/hero.png", alt: "Consoles portfolio mockup" },
          ].map((project, index) => (
            <img
              key={index}
              src={project.src}
              alt={project.alt}
              className={`w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ${
                portfolioVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
        <div className="mt-6 sm:mt-8 max-w-xs sm:max-w-md md:max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={8}
            slidesPerView={2}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 6 },
              480: { slidesPerView: 3, spaceBetween: 8 },
              640: { slidesPerView: 4, spaceBetween: 12 },
              768: { slidesPerView: 5, spaceBetween: 16 },
              1024: { slidesPerView: 6, spaceBetween: 20 },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            className="pb-8 sm:pb-10 md:pb-12"
            aria-label="Technology carousel"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-800 dark:bg-gray-200 text-gray-800 dark:text-gray-600 font-semibold text-xs sm:text-sm text-center py-2 sm:py-2.5 md:py-3 px-2 sm:px-3 md:px-4 rounded-md shadow-md hover:scale-105 transition-all duration-300">
                  {tech}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-6">
          {/* <a
            href="https://www.linkedin.com/in/grisha-p-0a892935a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-500 transition-colors duration-300"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin className="w-6 h-6 sm:w-7 h-7 md:w-8 h-8" />
          </a> */}
          <a
            href="https://x.com/tapecodeEnt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-500 transition-colors duration-300"
            aria-label="Visit my X profile"
          >
            <FaXTwitter className="w-6 h-6 sm:w-7 h-7 md:w-8 h-8" />
          </a>
        </div>
        <div className="mt-4 sm:mt-6">
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
};

export default Hero;