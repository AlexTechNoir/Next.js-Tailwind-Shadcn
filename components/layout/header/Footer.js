import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {

  const transition = { duration: 1, ease: [ 0.76, 0, 0.24, 1 ] }

  const translate = {
    initial: {
      y: '100%'
    },
    enter: (i) => ({
      y: 0,
      transition: {...transition, delay: i[0]}
    }),
    exit: (i) => ({
      y: '100%',
      transition: { duration: 0.7, ease: [ 0.76, 0, 0.24, 1 ], delay: i[1]}
    })
  }
  
  return (
    <div className="flex text-[12px] mt-[40px] flex-wrap items-end min-[1000px]:justify-between">
      <ul className="list-none p-0 w-[50%] overflow-hidden uppercase min-[1000px]:w-auto">
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="text-[#9f9689]">Made by:</span>Studio Lumio
        </motion.li>
      </ul>
      <ul className="list-none p-0 w-[50%] overflow-hidden uppercase min-[1000px]:w-auto">
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="text-[#9f9689]">Typograhy:</span>Google Fonts
        </motion.li>
      </ul>
      <ul className="list-none p-0 w-[50%] overflow-hidden uppercase min-[1000px]:w-auto">
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="text-[#9f9689]">Images:</span>FREEPIC, ENVATO
        </motion.li>
      </ul>
      <ul className="list-none p-0 w-[50%] overflow-hidden uppercase min-[1000px]:w-auto">
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Privacy Policy
        </motion.li>
        <motion.li
          custom={[0.2, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Terms and Conditions
        </motion.li>
      </ul>
    </div>
  )
}
