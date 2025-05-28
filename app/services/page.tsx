import Link from "next/link";
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

export default function Services() {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Page Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I specialize in building modern, responsive, and SEO-friendly websites that help businesses grow. Let’s create something extraordinary for you.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/contact">
                  <button className="bg-gray-600 text-white text-base font-bold px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Tools</h2>
            <div className="flex justify-center gap-6">
              <span className="text-gray-600">Next.js</span>
              <span className="text-gray-600">TypeScript</span>
              <span className="text-gray-600">Tailwind CSS</span>
              <span className="text-gray-600">React</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Ready to start your project? Let’s make it happen!
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/contact">
                <button className="bg-gray-800 text-white text-base font-bold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
                  Get Started
                </button>
              </Link>
              <Link href="/projects">
                <button className="bg-gray-600 text-white text-base font-bold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700">
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