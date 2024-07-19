import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Body from './Body'
import Img from './Img'
import Footer from './Footer'

export default function Nav() {

  const links = [
    {
      title: 'Home',
      href: '/',
      src: '/nav/home.png'
    },
    {
      title: 'Shop',
      href: '/',
      src: '/nav/shop.png'
    },
    {
      title: 'About Us',
      href: '/',
      src: '/nav/home.png'
    },
    {
      title: 'Lookbook',
      href: '/',
      src: '/nav/lookbook.png'
    },
    {
      title: 'Contact',
      href: '/',
      src: '/nav/contact.png'
    },
  ]

  const [ selectedLink, setSelectedLink ] = useState({ isActive: false, index: 0 })

  const transition = { duration: 1, ease: [ 0.76, 0, 0.24, 1 ]}

  const height = {
    initial: {
      height: 0
    },
    enter: {
      height: 'auto',
      transition
    },
    exit: {
      height: 0,
      transition
    }
  }

  return (
    <motion.div className="overflow-hidden" variants={height} initial='initial' animate='enter' exit='exit'>
      <div className="mb-[80px] flex">
        <div>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
          <Footer />
        </div>
        <Img src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}
