import Head from 'next/head'

import Hero from '../components/index/Hero'
import CarouselSection from '../components/index/Carousel'
import LevitatingImgs from '../components/index/LevitatingImgs'
import AccordionSection from '../components/index/Accordion'
import BentoLayout from '../components/index/BentoLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js main page</title>
        <meta name="description" content="Next.js, pages router" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="
        row-start-2 row-end-3 col-start-1 col-end-2 justify-self-center
        grid grid-rows-[auto_auto_auto_auto_auto] grid-cols-[1fr_minmax(100%,1024px)_1fr] content-start gap-y-80
        w-[1024px] p-[1rem]
        max-[1024px]:w-[100%]
        max-[520px]:gap-y-48
      ">
        <Hero />
        <CarouselSection />
        <LevitatingImgs />
        <AccordionSection />
        <BentoLayout />
      </main>
    </>
  )
}
