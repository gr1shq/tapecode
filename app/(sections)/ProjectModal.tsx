// app/(components)/ProjectModal.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

interface ProjectModalProps {
  project: Project | null;
  closeModal: () => void;
}

export default function ProjectModal({ project, closeModal }: ProjectModalProps) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold font-['Poppins'] mb-4">{project.title}</h3>
        <p className="text-sm font-['Inter'] mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-[#D1D5DB] text-[#333333] text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {project.images.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt={`${project.title} screenshot ${i + 1}`}
              width={300}
              height={200}
              className="w-full h-32 object-cover rounded"
            />
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              className="bg-[#F4A261] text-[#333333] font-bold px-4 py-2 rounded hover:bg-[#E76F51] transition-all"
            >
              Live Demo
            </Link>
          )}
          {project.githubLink && (
            <Link
              href={project.githubLink}
              className="bg-[#0A6E6E] text-white font-bold px-4 py-2 rounded hover:bg-[#084B4B] transition-all"
            >
              GitHub
            </Link>
          )}
          <button
            onClick={closeModal}
            className="bg-[#D1D5DB] text-[#333333] font-bold px-4 py-2 rounded hover:bg-[#B0B7C3] transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}