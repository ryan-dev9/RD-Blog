// components/Navbar.jsx
"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ModeToggle from "./theme-btn";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <nav className="w-full bg-white/5 backdrop-blur-md shadow-md fixed flex justify-center top-0 left-0 z-50">
    <nav className="w-full bg-white/5 backdrop-blur-sm sm:px-4 px-5 py-3  shadow-md items-center fixed flex justify-between top-0 left-0 z-50">
    
      {/* <div className="container mx-0 px-1 py-3 flex items-center justify-between"> */}
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold font-[orbitron] tracking-tight text-blue-600 hover:text-blue-900 transition-colors duration-200">
          RD-Blog
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-700 text-xl dark:text-gray-200 hover:text-blue-700 font-medium transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 text-xl dark:text-gray-200 hover:text-blue-700 font-medium transition-colors duration-200">
            About
          </Link>
          <Link href="/blog" className="text-gray-700 text-xl dark:text-gray-200 hover:text-blue-700 font-medium transition-colors duration-200">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 text-xl dark:text-gray-200 hover:text-blue-700 font-medium transition-colors duration-200">
            Contact
          </Link>
          <div className="gap-0 mx-0 ">
            <ModeToggle />
          </div>
        </div>

        {/* Hamburger for Mobile */}

        <div className="md:hidden">
          <Sheet>
            <div className="flex gap-5">

              <ModeToggle />
              <SheetTrigger asChild>
                <button
                  className="scale-145 sm:mt-0 mt-3 flex flex-col gap-1.5 group"
                  aria-label="Toggle menu"
                  onClick={() => setMenuOpen((v) => !v)}
                >
                  <span className={`block h-0.5 w-6 bg-blue-700 rounded transition-all duration-300 `}></span>
                  <span className={`block h-0.5 w-6 bg-blue-700 rounded transition-all duration-300`}></span>
                  <span className={`block h-0.5 w-6 bg-blue-700 rounded transition-all duration-300`}></span>
                </button>
              </SheetTrigger>
            </div>



            <SheetContent>


              <SheetHeader>
                <SheetTitle className={`text-2xl text-white mb-4`}>RD-Blog</SheetTitle>
                <SheetDescription className={`text-white text-xl`}>
                  <div className="flex flex-col gap-8 items-center">
                    <Link href="/" className="text-gray-700 text-xl dark:text-gray-200 hover:text-blue-700 font-medium transition-colors duration-200">
                      Home
                    </Link>
                    <Link href="/about" className="text-gray-700 text-xl dark:text-gray-200 hover:text-blue-700 font-medium transition-colors duration-200">
                      About
                    </Link>
                    <Link href="/blog" className="text-gray-700 text-xl dark:text-gray-200 hover:text-blue-700 font-medium transition-colors duration-200">
                      Blog
                    </Link>
                    <Link href="/contact" className="text-gray-700 text-xl dark:text-gray-200 hover:text-blue-700 font-medium transition-colors duration-200">
                      Contact
                    </Link>
                  </div>

                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

      {/* </div> */}


      {/* Mobile Menu */}
      {/* <div
        className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow transition-all duration-300 ${
          menuOpen ? "max-h-40 py-4" : "max-h-0 overflow-hidden py-0"
        }`}
      >
        <div className="flex flex-row justify-around items-center">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-200 text-xl hover:text-blue-700 font-medium transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 dark:text-gray-200 text-xl hover:text-blue-700 font-medium transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 dark:text-gray-200 text-xl hover:text-blue-700 font-medium transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div> */}


    </nav>
  );
}