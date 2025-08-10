// components/BlogSection.jsx
import Link from "next/link";
import Image from "next/image";
import { Orbitron } from "next/font/google";

export default function BlogSection() {
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
            link: "/about",
        },
    ];

    return (
        <section className="py-12 bg-transparent">
            <div className="max-w-8xl mx-auto px-6">
                <h2 className="text-5xl font-semibold font-[Orbitron] text-center mb-10 ">
                    Latest Blog Posts <span>
                        <Link
                            href="/blog"
                            className="inline-block px-4 text-xl  py-2 bg-blue-600 font-semibold pb-2 font-sans text-white  rounded-lg hover:bg-black transition duration-300"
                        >
                            View All
                        </Link>
                    </span>
                </h2>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-black dark:bg-white/5 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
                        >
                            {/* Image Section */}
                            <div className="w-full h-48 relative">
                                <Image
                                    src={blog.image} // yaha tumhara image path
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>


                            {/* Content Section */}
                            <div className="p-6 flex flex-col justify-between h-full">

                                <div>
                                    <h3 className="text-2xl font-semiboldbold ">
                                        {blog.title}
                                    </h3>
                                    <p className="mt-3 ">
                                        {blog.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

{/* <div className="mt-4 text-center">
    <Link
        href="/blog"
        className="inline-block px-4  py-2 bg-blue-600 font-semibold text-white  rounded-lg hover:bg-black transition duration-300"
        >
        View All
    </Link>
</div> */}