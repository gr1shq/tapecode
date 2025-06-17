// app/(components)/Footer.tsx
"use client";

import { FaEnvelope, FaXTwitter } from "react-icons/fa6";

interface FooterProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  aboutRef: React.RefObject<HTMLElement>;
  servicesRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

export default function Footer({ scrollToSection, aboutRef, servicesRef, projectsRef, contactRef }: FooterProps) {
  return (
    <footer className="bg-[#333333] text-white py-8 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Navigation Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-['Poppins'] text-[#F4A261] mb-4">Explore</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
                { label: "About", ref: aboutRef },
                { label: "Services", ref: servicesRef },
                { label: "Projects", ref: projectsRef },
                { label: "Contact", ref: contactRef },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.ref ? () => scrollToSection(link.ref) : link.action}
                    className="text-gray-300 hover:text-[#F4A261] font-['Inter'] text-sm sm:text-base transition-colors duration-300"
                    aria-label={`Scroll to ${link.label} section`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-['Poppins'] text-[#F4A261] mb-4">Connect</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <a
                  href="mailto:tapecode.studio@gmail.com"
                  className="text-gray-300 hover:text-[#F4A261] font-['Inter'] text-sm sm:text-base transition-colors duration-300"
                  aria-label="Email tapecode.studio@gmail.com"
                >
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="w-4 h-4" />
                    tapecode.studio@gmail.com
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <a
                  href="https://x.com/tapecodeEnt"
                  className="text-gray-300 hover:text-[#F4A261] font-['Inter'] text-sm sm:text-base transition-colors duration-300"
                  aria-label="Visit X profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <FaXTwitter className="w-4 h-4" />
                    X
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-['Poppins'] text-[#F4A261] mb-4">About Tapecode</h3>
            <p className="text-gray-300 font-['Inter'] text-sm sm:text-base mb-4">
              Building modern, responsive websites with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex justify-center sm:justify-start gap-6">
              <div>
                <p className="text-base sm:text-lg font-bold text-[#0A6E6E]">50+</p>
                <p className="text-gray-300 font-['Inter'] text-xs sm:text-sm">Projects</p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-[#0A6E6E]">4+</p>
                <p className="text-gray-300 font-['Inter'] text-xs sm:text-sm">Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-4 text-center">
          <p className="text-gray-300 font-['Inter'] text-xs sm:text-sm">
            © {new Date().getFullYear()} Tapecode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}