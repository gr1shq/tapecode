// app/page.tsx
"use client";

import { useRef, useState } from "react";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import About from "./(sections)/About";
import Services from "./(sections)/Services";
import Skills from "./(sections)/Skills";
import Projects from "./(sections)/Projects";
import ProjectModal from "./(sections)/ProjectModal";
import Contact from "./(sections)/Contact";
import Hero from "./(sections)/Hero";

interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  tech: string[];
  heroImage: string;
  images: string[];
  liveLink?: string;
  githubLink?: string;
}

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#F5F5F5] text-[#333333] font-sans">
      <Header
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Hero
        scrollToSection={scrollToSection}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Projects sectionRef={projectsRef} setSelectedProject={setSelectedProject} />
      <ProjectModal project={selectedProject} closeModal={() => setSelectedProject(null)} />
      <About sectionRef={aboutRef} />
      <Services
        sectionRef={servicesRef}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <Skills />
      <Contact sectionRef={contactRef} />
      <Footer
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </div>
  );
}