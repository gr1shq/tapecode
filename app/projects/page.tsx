"use client";

import Link from "next/link";
import Header from "../(components)/Header";
import Footer from "../(components)/Footer";
import projects from "../../data/projects.json";
import Image from "next/image";

interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  tech: string[];
  heroImage: string;
  images: string[];
}

export default function Projects() {
  return (
    <div className="bg-gray-100">
      <Header />
      <section className="projects-bg py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Page Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore my work, built with Next.js, TypeScript, Tailwind CSS, and React to deliver fast, responsive, and SEO-friendly websites.
          </p>

          {/* Filter Bar */}
          <div className="mb-8 flex justify-center gap-3 sm:gap-4">
            {["All", "E-commerce", "Landing Page"].map((category) => (
              <button
                key={category}
                className="bg-gray-200 text-black  text-sm font-semibold px-3 py-1 rounded-md transition-all duration-300 hover:bg-gray-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project: Project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                aria-label={`View details for ${project.title}`}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Image
                    src={project.heroImage}
                    alt={`Screenshot of ${project.title} homepage`}
                    className="w-full h-36 sm:h-48 object-cover"
                  />
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-black font-semibold text-xs px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="bg-gray-800 text-white text-sm sm:text-base font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-md transition-all duration-300 hover:bg-black">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-12 mb-12 flex justify-center gap-6 sm:gap-8">
            <div>
              <p className="text-2xl font-bold text-gray-800">50+</p>
              <p className="text-gray-600 text-base">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">4+</p>
              <p className="text-gray-600 text-base">Years of Experience</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12">
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Like what you see? Let’s build something amazing together!
            </p>
            <div className="flex justify-center gap-4 sm:gap-6">
              <Link href="/contact">
                <button className="bg-gray-800 text-white text-base sm:text-lg font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
                  Get in Touch
                </button>
              </Link>
              <Link href="/about">
                <button className="bg-gray-600 text-white text-base sm:text-lg font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
                  Learn More About Me
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