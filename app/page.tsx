"use client"

import Link from "next/link";
import Navbar from "./components/Navbar";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion"
import { B612_Mono, Xanh_Mono, Major_Mono_Display } from "next/font/google";
import Hero from "./components/Hero";
import Image from "next/image";
import About from "./components/About";

const hydrogen = Major_Mono_Display({ subsets: ["latin"], weight: ["400"]})

export default function Home() {
  return (
    <motion.main 
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 4,
      }}
      className="w-[100vw] h-[100vh] text-neutral-200  font-thin"
    >
      <motion.div 
        animate={{
          y: "-100%",
        }}
        transition={{
          ease: "anticipate",
          duration: 2.5,
        }}
        className="absolute h-screen w-screen bg-black z-50 flex justify-center items-center"
      >
        <h1 className="text-9xl italic">AA</h1>
      </motion.div>
      <Navbar />
      <Hero />
      <About />
      <section className="Projects w-[100vw] h-[100vh]" id="projects"></section>
      <section className="Contact w-[100vw] h-[100vh]" id="contact"></section>
    </motion.main>
  );
}
