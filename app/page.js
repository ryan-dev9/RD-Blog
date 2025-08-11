"use client"
import Image from "next/image";
import Subscription from "@/components/subscription";
import ClientComments from "@/components/ClientComments";
import BlogSection from "@/components/blog-pages";
import { Orbitron } from "next/font/google";
import Homepage from "@/components/homePage";



function Home() {
 
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
      <Homepage/>
      <Subscription />
      <ClientComments />
      <BlogSection />
    </div>
  );
}

export default Home;
