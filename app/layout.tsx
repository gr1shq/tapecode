import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tapecode | Web Developer",
  description:
    "Tapecode builds modern, responsive, and SEO-friendly websites using Next.js, TypeScript, Tailwind CSS, and React. Explore projects like Roomvibe, SimplifAI, and Tapnglow, or contact me at tapecode.studio@gmail.com for freelance work.",
  keywords: [
    "web developer",
    "freelance web development",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Figma",
    "Vercel",
    "e-commerce",
    "SEO-friendly websites",
    "Tapecode",
  ],
  authors: [{ name: "Tapecode", url: "https://tapecode.vercel.app" }],
  openGraph: {
    title: "Tapecode | Web Developer",
    description:
      "Discover Tapecode’s portfolio of responsive, SEO-friendly websites built with Next.js, TypeScript, and Tailwind CSS. Contact tapecode.studio@gmail.com for your next project.",
    url: "https://tapecode.vercel.app",
    siteName: "Tapecode",
    images: [
      {
        url: "/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Tapecode Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapecode | Web Developer",
    description:
      "Explore Tapecode’s web development projects and hire me for responsive, SEO-friendly websites. Contact: tapecode.studio@gmail.com",
    images: ["/images/og-image.jpg"], 
    creator: "@tapecodeEnt",
  },
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}