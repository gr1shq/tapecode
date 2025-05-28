import Link from "next/link";
import Header from "../(components)/Header";
import Footer from "../(components)/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Page Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Tapecode
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I’m a versatile web developer crafting modern, responsive, and SEO-friendly websites to help businesses shine online.
          </p>

          {/* Bio Section */}
          <div className="mb-12 max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg mb-4">
              Hi, I’m Tapecode! I bring ideas to life with a strong foundation in web development, using tools like HTML, CSS, JavaScript, Next.js, TypeScript, and Tailwind CSS. From e-commerce platforms like Roomvibe and Tapnglow to innovative tools like SimplifAI, I build fast, user-friendly, and SEO-optimized websites that deliver results.
            </p>
            <p className="text-gray-600 text-lg">
              I’m passionate about turning designs into reality, whether it’s coding pixel-perfect Figma mockups or creating full-stack solutions with Node.js and Vercel. My goal is to help your business stand out with websites that are both functional and beautiful. Let’s create something extraordinary together!
            </p>
          </div>

          {/* Skills/Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
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
                "Python"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="text-sm bg-gray-200 px-4 py-2 rounded-md text-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect with Me</h2>
            <p className="text-gray-600 text-lg mb-4">
              Email:{" "}
              <a
                href="mailto:tapecode.studio@gmail.com"
                className="text-gray-800 font-semibold hover:text-black transition"
              >
                tapecode.studio@gmail.com
              </a>
            </p>
            <div className="flex justify-center gap-4">
              <Link href="https://www.linkedin.com/in/grigory-polyakov-0a892935a/">
                <button className="bg-gray-800 text-white text-base font-bold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
                  LinkedIn
                </button>
              </Link>
              <Link href="https://x.com/tapecodeEnt">
                <button className="bg-gray-600 text-white text-base font-bold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
                  X Profile
                </button>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Ready to work together? Let’s make your vision a reality!
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <button className="bg-gray-800 text-white text-base font-bold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
                  Get in Touch
                </button>
              </Link>
              <Link href="/projects">
                <button className="bg-gray-600 text-white text-base font-bold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
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