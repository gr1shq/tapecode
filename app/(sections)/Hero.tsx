import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hi, I’m Tapecode, a Web Developer
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          I build fast, responsive, and user-friendly websites using Next.js, TypeScript, Tailwind CSS, and React.
        </p>
        <div className="flex justify-center gap-6">
          {/* Highlighted Hire Me Button */}
          <Link href="/contact" passHref>
            <button className="relative bg-gray-800 text-white text-xl font-bold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
              Hire Me
            </button>
          </Link>
          {/* Secondary See My Work Button */}
          <Link href="/projects" passHref>
            <button className="relative bg-gray-600 text-white text-xl font-bold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
              See My Work
            </button>
          </Link>
        </div>
        {/* Tech Stack */}
        <div className="mt-8 flex justify-center gap-6">
          <span className="text-gray-600">Next.js</span>
          <span className="text-gray-600">TypeScript</span>
          <span className="text-gray-600">Tailwind CSS</span>
          <span className="text-gray-600">React</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;