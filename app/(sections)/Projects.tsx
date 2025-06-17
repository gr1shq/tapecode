// app/(sections)/Projects.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  return (
    <section id="projects" ref={sectionRef} className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-['Poppins'] text-center mb-8 text-[#0A6E6E]"
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: Project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold font-['Poppins']">{project.title}</h3>
              <p className="text-sm font-['Inter'] mt-2">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-[#D1D5DB] text-[#333333] text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}