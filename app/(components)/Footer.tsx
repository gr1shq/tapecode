import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition">
            About
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition">
            Projects
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white transition">
            Services
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Contact and Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a
            href="mailto:tapecode.studio@gmail.com"
            className="text-gray-300 hover:text-white transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/grigory-polyakov-0a892935a/"
            className="text-gray-300 hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/tapecodeEnt"
            className="text-gray-300 hover:text-white transition"
          >
            X
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-300">© 2025 Tapecode. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;