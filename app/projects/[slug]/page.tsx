import Link from "next/link";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import projects from "@/data/projects.json"

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Header />
      <section className="bg-gray-100 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto text-center">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {project.images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full h-64 object-cover rounded-md"
              />
            ))}
          </div>
          {/* Buttons */}
          <div className="flex justify-center gap-4">
            {project.liveLink && (
              <Link href={project.liveLink}>
                <button className="bg-gray-800 text-white text-base font-bold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
                  Live Demo
                </button>
              </Link>
            )}
            {project.githubLink && (
              <Link href={project.githubLink}>
                <button className="bg-gray-600 text-white text-base font-bold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
                  GitHub
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}