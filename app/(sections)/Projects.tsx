"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import projects from "../../data/projects.json";

interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  tech: string[];
  heroImage: string;
  images: string[];
  liveLink?: string;
  githubLink?: string;
}

interface ProjectsProps {
  sectionRef: React.RefObject<HTMLElement>;
  setSelectedProject: (project: Project | null) => void;
}

export default function Projects({ sectionRef, setSelectedProject }: ProjectsProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Feature the last 5 projects
  const featuredProjects = projects.slice(-5);
  const allProjects = projects;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 px-4 bg-[#F5F5F5] text-[#333333]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-['Poppins'] text-center mb-6 text-[#0A6E6E]"
      >
        Featured Work
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-10"
      >
        {featuredProjects.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="rounded-lg"
          >
            {featuredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:w-1/2">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      width={400}
                      height={300}
                      quality={75}
                      className="w-full h-48 md:h-64 object-cover"
                      onError={() => console.error(`Failed to load image: ${project.heroImage}`)}
                    />
                  </div>
                  <div className="md:w-1/2 p-4">
                    <h3 className="text-xl font-bold font-['Poppins'] text-[#0A6E6E]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm font-['Inter'] text-[#666666]">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#D1D5DB] text-[#333333] text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#F4A261] text-[#333333] font-bold px-3 py-2 text-sm rounded-lg hover:bg-[#E76F51] transition-all"
                        >
                          Live Demo
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="bg-[#0A6E6E] text-white font-bold px-3 py-2 text-sm rounded-lg hover:bg-[#085353] transition-all"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-[#666666] font-['Inter']">
            No featured projects available.
          </p>
        )}
      </motion.div>

      {/* All Projects Grid */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold font-['Poppins'] text-center mb-6 text-[#0A6E6E]"
      >
        All Projects
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {allProjects.length > 0 ? (
          allProjects.map((project: Project, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.heroImage}
                alt={project.title}
                width={300}
                height={200}
                quality={75}
                className="w-full h-40 object-cover"
                onError={() => console.error(`Failed to load image: ${project.heroImage}`)}
              />
              <div className="p-3">
                <h3 className="text-base font-semibold font-['Poppins']">
                  {project.title}
                </h3>
                <p className="text-xs font-['Inter'] mt-1 text-[#666666]">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#D1D5DB] text-[#333333] text-[10px] px-1.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {hoveredProject === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#0A6E6E]/80 flex items-center justify-center"
                >
                  <button
                    className="bg-white text-[#0A6E6E] font-bold px-3 py-1.5 text-sm rounded-lg"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))
        ) : (
          <p className="text-center text-[#666666] font-['Inter']">
            No projects available.
          </p>
        )}
      </div>
    </section>
  );
}