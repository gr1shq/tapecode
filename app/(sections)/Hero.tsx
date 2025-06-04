"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeroTitle from "../(components)/HeroTitle";
import ThemeToggle from "../(components)/ThemeToggle";

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
  return (
    <section className="home-bg min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <HeroTitle
          strings={["Hi, I’m Tapecode, a Web Developer"]}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-600 mb-4 sm:mb-6 transition-colors duration-300"
        />
        <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto mt-2 transition-colors duration-300">
          I build fast, responsive, and user-friendly websites using Next.js, TypeScript, Tailwind CSS, and React.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="/contact" aria-label="Contact me to hire">
            <button className="bg-gray-800 dark:bg-gray-700 text-white text-base sm:text-lg md:text-xl font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black dark:hover:bg-gray-600">
              Hire Me
            </button>
          </Link>
          <Link href="/projects" aria-label="View my projects">
            <button className="bg-gray-600 dark:bg-gray-400 text-white dark:text- text-base sm:text-lg md:text-xl font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 dark:hover:bg-gray-500">
              See My Work
            </button>
          </Link>
        </div>
        {/* Skill Highlights */}
        <div className="mt-6 sm:mt-8 mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-600 mb-2 sm:mb-4 transition-colors duration-300">
            My Core Skills
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            {["Next.js", "TypeScript", "Tailwind CSS", "React"].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-600 dark:bg-gray-300 text-gray-800 dark:text-gray-700 font-semibold text-xs sm:text-sm px-2 py-1 sm:py-2 rounded-md shadow-sm transition-all duration-300 hover:bg-gray-500 dark:hover:bg-gray-200 w-20 sm:w-24"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Carousel */}
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
                <div className="bg-gray-800 dark:bg-gray-200 text-gray-800 dark:text-gray-600 font-semibold text-xs sm:text-sm text-center py-2 sm:py-2.5 md:py-3 px-2 sm:px-3 md:px-4 rounded-md shadow-md hover:scale-105 hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-300">
                  {tech}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Social Links */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-6">
          <a
            href="https://github.com/tapecode" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-500 transition-colors duration-300"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub className="w-6 h-6 sm:w-7 h-7 md:w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/grigory-polyakov-0a892935a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-500 transition-colors duration-300"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin className="w-6 h-6 sm:w-7 h-7 md:w-8 h-8" />
          </a>
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