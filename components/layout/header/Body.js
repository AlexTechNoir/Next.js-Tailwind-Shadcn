import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Body({ links, selectedLink, setSelectedLink }) {

  const transition = { duration: 1, ease: [ 0.76, 0, 0.24, 1 ] }

  const translate = {
    initial: {
      y: '100%'
    },
    open: (i) => ({
      y: 0,
      transition: {...transition, delay: i[0]}
    }),
    closed: (i) => ({
      y: '100%',
      transition: { duration: 0.7, ease: [ 0.76, 0, 0.24, 1 ], delay: i[1]}
    })
  }

  const blur = {
    initial: {
      filter: 'blur(0px)',
      opacity: 1
    },
    open: {
      filter: 'blur(4px)',
      opacity: 0.6,
      transition: { duration: 0.3 }
    },
    closed: {
      filter: 'blur(0px)',
      opacity: 1,
      transition: { duration: 0.3 }
    },
  }

  const getChar = title => {
    let chars = []
    title.split('').forEach((char, index) => {
      chars.push(
        <motion.span key={`c_${index}`} custom={[ index * 0.02, (title.length - index) * 0.01 ]} variants={translate} initial="initial" animate="open" exit="closed">
          {char}
        </motion.span>
      )
    })
    return chars
  }

  return (
    <div className="flex flex-wrap mt-[40px] min-[1000px]:max-w-[1200px] min-[1000px]:mt-[80px]">
      {links.map((link, index) => {
        const { title, href } = link
        return (
          <Link
            className="no-underline text-black text-[32px] font-light pl-[10px] pt-[30px] uppercase overflow-hidden min-[1000px]:text-[5vw] min-[1000px]:pr-[2vw]"
            href={href}
            key={`l_${index}`}
            onMouseOver={() => setSelectedLink({ isActive: true, index })}
            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
          >
            <motion.p
              className="m-0 flex"
              variants={blur}
              initial="initial"
              animate={selectedLink.isActive && selectedLink.index != index ? 'open' : 'closed'}
            >
              {getChar(title)}
            </motion.p>
          </Link>
        )
      })}
    </div>
  )
}
