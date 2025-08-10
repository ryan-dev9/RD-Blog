// pages/my-blogs.js
"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MyBlogs() {
  const blogs = [
    {
      id: 1,
      title: "How to Build a Responsive Website",
      description:
        "Learn step-by-step how to create a fully responsive website using HTML, CSS, and modern frameworks.",
      image: "/images/blog1.png",
      link: "/blog/responsive-website",
    },
    {
      id: 2,
      title: "Next.js SEO Best Practices",
      description:
        "Boost your website’s visibility with these essential Next.js SEO optimization tips.",
      image: "/images/blog2.png",
      link: "/blog/nextjs-seo",
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS",
      description:
        "Discover how Tailwind CSS can speed up your workflow and make your UI look beautiful.",
      image: "/images/blog3.png",
      link: "/blog/tailwind-css",
    },
    {
      id: 4,
      title: "JavaScript ES6+ Features You Should Know",
      description:
        "A deep dive into the most useful ES6+ JavaScript features to write cleaner and modern code.",
      image: "/images/blog4.png",
      link: "/blog/es6-features",
    },
    {
      id: 5,
      title: "React.js Performance Optimization",
      description:
        "Tips and techniques to make your React.js apps faster and more efficient.",
      image: "/images/blog5.png",
      link: "/blog/react-performance",
    },
    {
      id: 6,
      title: "UI/UX Design Principles",
      description:
        "Learn the core UI/UX principles to design intuitive and user-friendly applications.",
      image: "/images/blog6.png",
      link: "/blog/ui-ux-principles",
    },
    {
      id: 7,
      title: "Deploying Apps with Vercel",
      description:
        "Step-by-step guide to deploy your Next.js and React apps using Vercel.",
      image: "/images/blog7.png",
      link: "/blog/deploy-vercel",
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold font-[Orbitron] mt-4 text-center mb-12"
        >
          My Blogs
        </motion.h1>

        {/* Blogs Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              {/* Blog Image */}
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold">{blog.title}</h3>
                  <p className="mt-3 text-gray-300">{blog.description}</p>
                </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

