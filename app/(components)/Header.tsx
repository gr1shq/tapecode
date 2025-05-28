"use client"

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Tapecode
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-black transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-black transition">
            About
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-black transition">
            Projects
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-black transition">
            Services
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-black transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Burger Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-black transition focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-black transition text-lg"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-black transition text-lg"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-black transition text-lg"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-black transition text-lg"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-black transition text-lg"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;