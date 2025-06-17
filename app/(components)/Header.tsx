// app/(components)/Header.tsx
"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  aboutRef: React.RefObject<HTMLElement | null>;
  servicesRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
}

export default function Header({ scrollToSection, aboutRef, servicesRef, projectsRef, contactRef }: HeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-[#F5F5F5] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-['Poppins'] text-[#0A6E6E]">
          Tapecode
        </Link>
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection(aboutRef)} className="hover:text-[#F4A261] font-['Inter']">
            About
          </button>
          <button onClick={() => scrollToSection(servicesRef)} className="hover:text-[#F4A261] font-['Inter']">
            Services
          </button>
          <button onClick={() => scrollToSection(projectsRef)} className="hover:text-[#F4A261] font-['Inter']">
            Projects
          </button>
          <button onClick={() => scrollToSection(contactRef)} className="hover:text-[#F4A261] font-['Inter']">
            Contact
          </button>
        </nav>
        <button
          className="md:hidden text-[#0A6E6E]"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle Menu"
        >
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isNavOpen && (
        <nav className="md:hidden bg-[#F5F5F5] shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-[#F4A261] font-['Inter'] text-lg">
              About
            </button>
            <button onClick={() => scrollToSection(servicesRef)} className="hover:text-[#F4A261] font-['Inter'] text-lg">
              Services
            </button>
            <button onClick={() => scrollToSection(projectsRef)} className="hover:text-[#F4A261] font-['Inter'] text-lg">
              Projects
            </button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-[#F4A261] font-['Inter'] text-lg">
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}