import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import Nav from './header/Nav'

export default function Header() {

  const opacity = {
    initial: {
      opacity: 0
    },
    open: {
      opacity: 1,
      transition: { duration: 0.35 }
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.35 }
    }
  }

  const transition = { duration: 1, ease: [ 0.76, 0, 0.24, 1 ]}

  const background = {
    initial: {
      height: 0
    },
    open: {
      height: '100vh',
      transition
    },
    closed: {
      height: 0,
      transition
    }
  }

  const [ isActive, setIsActive ] = useState(false)

  return (
    <header className="
      row-start-1 row-end-2 col-start-1 col-end-2
      p-[10px] fixed w-full bg-[#f4f0ea]
      min-[600px]:p-[20px] z-10
    ">
      <div className="flex items-center justify-center text-[12px] uppercase relative min-[600px]:text-[15px]">

        <Link className="absolute left-0 no-underline text-black" href="/">shadcn/ui</Link>

        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onMouseDown={() => setIsActive(!isActive)}
        >
          <div className={`
            w-[22.5px]
            before:content-[''] before:block before:w-full before:h-[1px] before:bg-black before:relative before:transition-all ${isActive ? 'before:top-[1px]' : 'before:top-[4px]'}
            after:content-[''] after:block after:w-full after:h-[1px] after:bg-black after:relative after:transition-all ${isActive ? 'after:top-[-1px]' : 'after:top-[-4px]'}
            ${isActive ? 'before:rotate-[-45deg] after:rotate-[45deg]' : ''}
          `}></div>
          <div className="relative flex">
            <motion.p className="m-0" variants={opacity} animate={isActive ? 'closed' : 'open'}>Menu</motion.p>
            <motion.p
              className="m-0 absolute opacity-0"
              variants={opacity}
              animate={!isActive ? 'closed' : 'open'}
            >
              Close
            </motion.p>
          </div>
        </div>

      </div>
      <motion.div
        className="w-full absolute left-0 top-[100%] bg-black opacity-[0.5]"
        variants={background}
        animate={isActive ? 'open' : 'closed'}
      ></motion.div>
      <AnimatePresence mode='wait'>
        {isActive && <Nav />}
      </AnimatePresence>      
    </header>
  )
}
