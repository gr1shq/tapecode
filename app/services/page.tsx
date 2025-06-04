// pages/Services.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaCode, FaShoppingCart, FaRocket, FaPaintBrush } from "react-icons/fa";
import Header from "../(components)/Header";
import Footer from "../(components)/Footer";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Custom Website Development",
    description:
      "I build fast, responsive, and SEO-friendly websites tailored to your business needs using Next.js, TypeScript, Tailwind CSS, and React.",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Create a stunning online store with features like product listings, cart functionality, and affiliate integrations, designed for maximum conversions.",
  },
  {
    title: "Landing Pages",
    description:
      "Design and develop high-converting landing pages to showcase your brand, products, or services with a modern, user-friendly UI.",
  },
  {
    title: "UI/UX Design to Code",
    description:
      "Transform Figma designs into pixel-perfect, responsive websites with clean code and a focus on user experience.",
  },
];

// Map icons to services by index
const serviceIcons = [
  <FaCode className="w-8 h-8 text-gray-800" />,
  <FaShoppingCart className="w-8 h-8 text-gray-800" />,
  <FaRocket className="w-8 h-8 text-gray-800" />,
  <FaPaintBrush className="w-8 h-8 text-gray-800" />,
];

export default function Services() {
  return (
    <div className="bg-gray-100">
      <Header />
      <section className="services-bg min-h-screen py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Page Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I specialize in building modern, responsive, and SEO-friendly websites that help businesses grow. Let’s create something extraordinary for you.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-5 sm:p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{serviceIcons[index]}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {service.description}
                </p>
                <Link href="/contact" aria-label={`Learn more about ${service.title}`}>
                  <button className="bg-gray-600 text-white text-sm sm:text-base font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              My Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {["Next.js", "TypeScript", "Tailwind CSS", "React"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-black font-bold text-sm px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-12 flex justify-center gap-6 sm:gap-8">
            <div>
              <p className="text-lg sm:text-2xl font-bold text-gray-800">50+</p>
              <p className="text-gray-600 text-sm sm:text-base">Projects Completed</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-bold text-gray-800">4+</p>
              <p className="text-gray-600 text-sm sm:text-base">Years of Experience</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12">
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Ready to start your project? Let’s make it happen!
            </p>
            <div className="flex justify-center gap-4 sm:gap-6">
              <Link href="/contact" aria-label="Get started with a project">
                <button className="bg-gray-800 text-white text-base sm:text-lg font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
                  Get Started
                </button>
              </Link>
              <Link href="/projects" aria-label="View all projects">
                <button className="bg-gray-600 text-white text-base sm:text-lg font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
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