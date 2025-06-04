// pages/Contact.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Header from "../(components)/Header";
import Footer from "../(components)/Footer";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5s
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <section className="contact-bg min-h-screen py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Page Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Have a project in mind? Let’s build something amazing together. Reach out via the form or connect with me directly.
          </p>

          {/* Contact Info */}
          <div className="mb-8 space-y-4">
            <p className="text-gray-600 text-base sm:text-lg flex items-center justify-center gap-2">
              <FaEnvelope className="w-5 h-5 text-gray-800" />
              <a
                href="mailto:tapecode.studio@gmail.com"
                className="text-gray-800 font-semibold hover:text-black transition duration-300"
                aria-label="Email tapecode.studio@gmail.com"
              >
                tapecode.studio@gmail.com
              </a>
            </p>
            <div className="flex justify-center gap-4 sm:gap-6">
              <Link
                href="https://www.linkedin.com/in/grigory-polyakov-0a892935a/"
                aria-label="Visit my LinkedIn profile"
              >
                <button className="bg-gray-800 text-white text-sm sm:text-base font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black flex items-center gap-2">
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </button>
              </Link>
              <Link href="https://x.com/tapecodeEnt" aria-label="Visit my X profile">
                <button className="bg-gray-600 text-white text-sm sm:text-base font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 flex items-center gap-2">
                  <FaXTwitter className="w-4 h-4" />
                  X Profile
                </button>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/mwpogwvk"
            method="POST"
            className="max-w-lg mx-auto space-y-6"
            onSubmit={handleSubmit}
            aria-labelledby="contact-form"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 font-semibold mb-2 text-sm sm:text-base"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800 transition duration-300 hover:border-gray-500"
                placeholder="Your Name"
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold mb-2 text-sm sm:text-base"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800 transition duration-300 hover:border-gray-500"
                placeholder="Your Email"
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 font-semibold mb-2 text-sm sm:text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800 transition duration-300 hover:border-gray-500"
                placeholder="Tell me about your project..."
                aria-required="true"
              ></textarea>
            </div>
            {isSubmitted && (
              <p className="text-gray-800 text-sm sm:text-base font-semibold">
                Thank you! Your message has been sent successfully.
              </p>
            )}
            <button
              type="submit"
              className="bg-gray-800 text-white text-sm sm:text-base font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black"
              aria-label="Send contact message"
            >
              Send Message
            </button>
          </form>

          {/* Stats Section */}
          <div className="mt-12 mb-12 flex justify-center gap-6 sm:gap-8">
            <div>
              <p className="text-lg sm:text-2xl font-bold text-gray-800">50+</p>
              <p className="text-gray-600 text-sm sm:text-base">Projects Completed</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-bold text-gray-800">4+</p>
              <p className="text-gray-600 text-sm sm:text-base">Years of Experience</p>
            </div>
          </div>

          {/* Back to Projects CTA */}
          <div className="mt-12">
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Want to see my work first?
            </p>
            <Link href="/projects" aria-label="View all projects">
              <button className="bg-gray-600 text-white text-sm sm:text-base font-bold px-4 sm:px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}