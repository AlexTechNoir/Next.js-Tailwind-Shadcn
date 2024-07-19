import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SiGithub, SiTiktok, SiTwitter, SiYoutube, SiShadcnui } from 'react-icons/si'
import { FiMapPin, FiArrowRight } from 'react-icons/fi'
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'

export default function BentoLayout() {
  return (
    <div className="
      row-start-5 row-end-6 col-start-1 col-end-4
      grid grid-rows-[257px_257px_auto_auto] grid-cols-[1fr_1fr_1fr_1fr] gap-4
      px-4 py-12 w-full
      max-[1024px]:grid-rows-[200px_200px_auto_auto]
      max-[900px]:grid-rows-[180px_180px_auto_auto]
      max-[768px]:grid-rows-[auto_150px_auto_auto]
      max-[640px]:grid-rows-[auto_120px_auto_auto]
      max-[560px]:grid-rows-[auto_170px_170px_auto_auto]
      max-[425px]:grid-rows-[auto_140px_140px_auto_auto]
      max-[375px]:grid-rows-[auto_120px_120px_auto_auto]
    ">

      <Card className="row-start-1 row-end-3 col-start-1 col-end-3 bg-gray-900 rounded-3xl p-8 max-[768px]:row-end-2 max-[768px]:col-end-5">
        <SiShadcnui className="text-3xl text-white mb-4" />
        <h1 className="mb-12 text-4xl font-medium leading-tight text-white max-[1024px]:text-3xl max-[900px]:text-2xl max-[425px]:text-xl max-[375px]:text-base">
          Pick the components you need.&nbsp;
          <span className="text-zinc-400">
            Copy and paste the code into your project and customize to your needs.&nbsp;
          </span>
          The code is yours.
        </h1>
        <a href="#" className="flex items-center gap-1 text-red-300 hover:underline max-[375px]:text-sm">
          Contact us <FiArrowRight />
        </a>
      </Card>

      <YouTubeCard />
      <GitHubCard />
      <TikTokCard />
      <TwitterCard />

      <Card className="
        row-start-3 row-end-4 col-start-1 col-end-5
        bg-gray-900 rounded-3xl pt-4 text-2xl text-white
        max-[900px]:text-xl
        max-[560px]:row-start-4 max-[560px]:row-end-5
        max-[375px]:text-base
      ">
        <CardContent>
          This is not a component library. It&apos;s a collection of re-usable components that you can copy and paste into your apps. You do not install it as a dependency. It is not available or distributed via npm.
        </CardContent>
      </Card>

      <Card className="
        row-start-4 row-end-5 col-start-1 col-end-2
        bg-gray-900 rounded-3xl p-8 flex flex-col items-center gap-4
        max-[768px]:hidden
      ">
        <FiMapPin className="text-3xl text-white" />
        <p className="text-center text-lg text-zinc-400">Cyberspace</p>
      </Card>

      <Card className="
        row-start-4 row-end-5 col-start-2 col-end-5
        flex flex-col justify-around
        bg-gray-900 rounded-3xl p-4
        max-[768px]:col-start-1
        max-[560px]:row-start-5 max-[560px]:row-end-6
      ">
        <p className="mb-3 text-lg text-white max-[375px]:text-base">Join our mailing list</p>
        <div className="flex gap-4 max-[425px]:flex-col max-[425px]:items-start">
          <Input type="email" placeholder="Email" />
          <Button className="text-black bg-white">Join the list</Button>
        </div>
      </Card>

    </div>
  )
}

function YouTubeCard() {

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = e => {

    const rect = e.target.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const CardMotion = motion(Card)

  return (
    <CardMotion
      className="
        row-start-1 row-end-2 col-start-3 col-end-4
        bg-red-500 rounded-3xl p-4 relative
        max-[768px]:row-start-2 max-[768px]:row-end-3 max-[768px]:col-start-1 max-[768px]:col-end-2
        max-[560px]:col-end-3
      "
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className="grid h-full place-content-center text-3xl text-white"
        aria-label="go to youtube link"
        href="#"
        style={{
          transform: 'translateZ(75px)'
        }}
      >
        <SiYoutube />
      </a>
    </CardMotion>
  )
}

function GitHubCard() {

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = e => {

    const rect = e.target.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const CardMotion = motion(Card)

  return (
    <CardMotion
      className="
        row-start-1 row-end-2 col-start-4 col-end-5
        bg-green-600 rounded-3xl p-4
        max-[768px]:row-start-2 max-[768px]:row-end-3 max-[768px]:col-start-2 max-[768px]:col-end-3
        max-[560px]:col-start-3 max-[560px]:col-end-5
      "
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className="grid h-full place-content-center text-3xl text-white"
        aria-label="go to github link"
        href="#"
        style={{
          transform: 'translateZ(75px)'
        }}
      >
        <SiGithub />
      </a>
    </CardMotion>
  )
}

function TikTokCard() {

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = e => {

    const rect = e.target.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const CardMotion = motion(Card)

  return (
    <CardMotion
      className="
        row-start-2 row-end-3 col-start-3 col-end-4
        bg-zinc-200 rounded-3xl p-4
        max-[560px]:row-start-3 max-[560px]:row-end-4 max-[560px]:col-start-1 max-[560px]:col-end-3
      "
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className="grid h-full place-content-center text-3xl"
        aria-label="go to tiktok link"
        href="#"
        style={{
          transform: 'translateZ(75px)'
        }}
      >
        <SiTiktok />
      </a>
    </CardMotion>
  )
}

function TwitterCard() {

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = e => {

    const rect = e.target.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const CardMotion = motion(Card)

  return (
    <CardMotion
      className="
        row-start-2 row-end-3 col-start-4 col-end-5
        bg-blue-500 rounded-3xl p-4
        max-[560px]:row-start-3 max-[560px]:row-end-4 max-[560px]:col-start-3
      "
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className="grid h-full place-content-center text-3xl text-white"
        aria-label="go to twitter link"
        href="#"
        style={{
          transform: 'translateZ(75px)'
        }}
      >
        <SiTwitter />
      </a>
    </CardMotion>
  )
}
