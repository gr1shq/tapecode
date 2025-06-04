"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white dark:bg-gray-500 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
          Tapecode
        </Link>

        {/* Desktop Navigation and Theme Toggle */}
        <div className="flex items-center space-x-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
              Projects
            </Link>
            <Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Theme Toggle (Desktop) */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-500 shadow-md transition-colors duration-300">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 text-lg"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 text-lg"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 text-lg"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 text-lg"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 text-lg"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            {/* Theme Toggle (Mobile) */}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;