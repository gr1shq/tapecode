import Link from "next/link";
import Header from "../(components)/Header";
import Footer from "../(components)/Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Page Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Have a project in mind? Let’s build something amazing together. Reach out via the form or connect with me directly.
          </p>

          {/* Contact Info */}
          <div className="mb-8 space-y-4">
            <p className="text-gray-600 text-lg">
              Email:{" "}
              <a
                href="mailto:tapecode.studio@gmail.com"
                className="text-gray-800 font-semibold hover:text-black transition"
              >
                tapecode.studio@gmail.com
              </a>
            </p>
            <div className="flex justify-center gap-6">
              <Link href="https://www.linkedin.com/in/grigory-polyakov-0a892935a/">
                <button className="bg-gray-800 text-white text-base font-bold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
                  LinkedIn
                </button>
              </Link>
              <Link href="https://x.com/tapecodeEnt">
                <button className="bg-gray-600 text-white text-base font-bold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
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
          >
            <div>
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white text-base font-bold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black"
            >
              Send Message
            </button>
          </form>

          {/* Back to Projects CTA */}
          <div className="mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Want to see my work first?
            </p>
            <Link href="/projects">
              <button className="bg-gray-600 text-white text-base font-bold px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
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