// components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 sm:py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Navigation Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 dark:text-gray-200 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                    aria-label={`Navigate to ${link.label} page`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <a
                  href="mailto:tapecode.studio@gmail.com"
                  className="text-gray-300 dark:text-gray-200 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  aria-label="Email tapecode.studio@gmail.com"
                >
                  <div className="flex items-center gap-2">
                <FaEnvelope className="w-4 h-4 text-gray-300" />
                  tapecode.studio@gmail.com
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <a
                  href="https://www.linkedin.com/in/grigory-polyakov-0a892935a/"
                  className="text-gray-300 dark:text-gray-200 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  aria-label="Visit LinkedIn profile"
                >
                  <div className="flex items-center gap-2">
                <FaLinkedin className="w-4 h-4 text-gray-300" />
                  LinkedIn
                  </div>
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <a
                  href="https://x.com/tapecodeEnt"
                  className="text-gray-300 dark:text-gray-200 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  aria-label="Visit X profile"
                >
                  <div className="flex items-center gap-2">
                <FaXTwitter className="w-4 h-4 text-gray-300" />
                  X
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Stats or Mini CTA */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">About Tapecode</h3>
            <p className="text-gray-300 dark:text-gray-200 text-sm sm:text-base mb-4">
              Building modern, responsive websites with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              <div>
                <p className="text-base sm:text-lg font-bold text-white">50+</p>
                <p className="text-gray-300 dark:text-gray-200 text-xs sm:text-sm">Projects</p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-white">4+</p>
                <p className="text-gray-300 dark:text-gray-200 text-xs sm:text-sm">Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-300 dark:text-gray-200 text-xs sm:text-sm transition-colors duration-300">
            © {new Date().getFullYear()} Tapecode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;