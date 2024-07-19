import React from 'react'
import { motion } from 'framer-motion'

export default function Img({ src, isActive }) {

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

  return (
    <motion.div
      className="hidden min-[1000px]:block min-[1000px]:w-[450px] min-[1000px]:h-[550px] min-[1000px]:relative"
      variants={opacity}
      animate={isActive ? 'open' : 'closed'}
    >
      <img className="absolute top-0 right-0 bottom-0 left-0 w-full h-full object-cover" src={src} alt="image" />
    </motion.div>
  )
}
