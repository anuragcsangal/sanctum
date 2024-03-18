
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <motion.nav 
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 4,
    }}
    className="fixed top-0 w-[100vw] h-[35px] border border-b-neutral-200 flex justify-center items-center italic font-thin text-xl bg-[#0f0f0f]"><Link href="/">AA</Link></motion.nav>
  )
}

export default Navbar
