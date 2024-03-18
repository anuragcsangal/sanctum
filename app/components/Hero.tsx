import React from 'react'
import { motion } from 'framer-motion'
import { Major_Mono_Display } from 'next/font/google'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';

const hydrogen = Major_Mono_Display({subsets: ["latin"], weight: ["400"]})

type Props = {}

const Hero = (props: Props) => {
  return (
      <motion.section 
        className="Hero w-[100vw] h-[100vh] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1" id="hero">
          <motion.div 
          className="h-[100%] w-full flex flex-col justify-center items-start gap-2 border border-neutral-200 pl-5">
            <h1 className={`${hydrogen.className} px-5 py-2 text-7xl md:text-9xl`}>Anurag Angal</h1>
            <p className="px-5 py-2 text-2xl md:text-4xl font-thin">Frontend Developer</p>
            <div className="px-5 py-2 text-2xl flex items-center gap-10">
              <Link href="https://linkedin.com/in/anurag-angal" target="_blank"><FaLinkedin className="font-thin" size={50}/></Link>
              <Link href="https://twitter.com/angal_anurag" target="_blank"><FaXTwitter size={50}/></Link>
              <Link href="http://github.com/anuragcsangal" target="_blank"><FaGithub size={50}/></Link>
              <Link href="mailto:anurag.angalcs@gmail.com" target="_blank"><CiMail size={50}/></Link>
            </div>
            <div className="px-5 py-2 text-xl">
            <Link href="/" className="p-3 my-2 bg-[#31363f] rounded">Resume</Link>
          </div>
          </motion.div>
          <motion.div 
          className="grid grid-cols-2 grid-rows-1 md:grid-cols-1 md:grid-rows-2">
            <Link href="#about" 
             className={`${hydrogen.className} text-4xl md:text-6xl h-[100%] w-full flex justify-center items-center border border-neutral-200`}>About</Link>
            <Link href="#projects" className={`${hydrogen.className} text-4xl md:text-6xl h-[100%] w-full flex justify-center items-center border border-neutral-200`}>Projects</Link>
          </motion.div>
      </motion.section>
  )
}

export default Hero
