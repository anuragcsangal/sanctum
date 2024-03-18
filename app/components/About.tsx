import React from 'react'
import Image from 'next/image'
import { Major_Mono_Display } from 'next/font/google'
import { motion } from 'framer-motion'

const hydrogen = Major_Mono_Display({subsets: ["latin"], weight: ["400"]})

type Props = {}

const About = (props: Props) => {
  return (
      <motion.section 
        className="About pt-[35px] w-[100vw] h-[100vh] grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1"
        id="about"
        >
        <div className="h-full w-full border border-neutral-200 ">
          <h2 className={`${hydrogen.className} px-5 py-5 text-4xl md:text-6xl`}>About Me</h2>
          <Image src="/anurag.jpg" className="hidden md:block px-5 rounded-lg" alt="Anurag Angal" width={250} height={250}/>
          <p className="px-5 pb-5 pt-10 text-xl md:text-2xl font-thin ">
            I'm a <span className="underline decoration-wavy decoration-cyan-400">Creative Developer.</span><br />
            I like to create beautiful as well as functional websites.<br />
            I love Computer Science and Mathematics.<br />
            My favorite thing to do in programming is Debugging.
          </p>
        </div>
        <div className="h-full w-full border border-neutral-200">
          <h2 className={`${hydrogen.className} px-5 py-5 text-4xl md:text-6xl`}>Skills</h2>
          <ul className="mx-3 px-5 py-1 text-xl md:text-2xl list-disc">
            <li className="">HTML, CSS, JavaScript</li>
            <li>Typescript</li>
            <li>Golang</li>
            <li>C</li>
            <li>React, NextJS, </li>
            <li>GSAP, Framer Motion</li>
            <li>Threejs, React-three-fiber</li>
          </ul>
        </div>
      </motion.section>
  )
}

export default About