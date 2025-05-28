import Link from "next/link";
import Header from "../(components)/Header";
import Footer from "../(components)/Footer";
import projects from "../../data/projects.json";

interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  heroImage: string;
}

export default function Projects() {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Page Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore my work, built with Next.js, TypeScript, Tailwind CSS, and React to deliver fast, responsive, and SEO-friendly websites.
          </p>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                    <button className="bg-gray-800 text-white text-base font-bold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Like what you see? Let’s build something amazing together!
            </p>
            <Link href="/contact">
              <button className="bg-gray-800 text-white text-xl font-bold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}