

import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import projects from "@/data/projects.json";
import Image from "next/image";

interface Project {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  images: string[];
  liveLink?: string;
  githubLink?: string;
}

const typedProjects: Project[] = projects;


export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = typedProjects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-gray-800 text-lg">Project not found</div>;
  }

  return (
    <div className="bg-gray-100">
      <Header />
      <section className="projects-bg min-h-screen py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto text-center">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 justify-center">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-200 text-black font-bold text-sm px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Stats */}
          <div className="mb-8 flex justify-center gap-6 sm:gap-8">
            <div>
              <p className="text-lg font-bold text-gray-800">Front-End</p>
              <p className="text-gray-600 text-sm">Primary Role</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">2024</p>
              <p className="text-gray-600 text-sm">Completed</p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {project.images.map((image, i) => (
              <div key={i} className="relative group">
                <Image
                  width={500}
                  height={300}
                  src={image}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-48 sm:h-64 object-cover rounded-md shadow-md transition-all duration-300 group-hover:brightness-75"
                />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 sm:gap-6">
            {project.liveLink && (
              <Link href={project.liveLink} aria-label={`View live demo of ${project.title}`}>
                <button className="bg-gray-800 text-white text-sm sm:text-base font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black flex items-center gap-2">
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Live Demo
                </button>
              </Link>
            )}
            {project.githubLink && (
              <Link href={project.githubLink} aria-label={`View GitHub repository for ${project.title}`}>
                <button className="bg-gray-600 text-white text-sm sm:text-base font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 flex items-center gap-2">
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </button>
              </Link>
            )}
            <Link href="/projects" aria-label="Back to all projects">
              <button className="bg-gray-600 text-white text-sm sm:text-base font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
                Back to Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}