import { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'

export default function LevitatingImgs() {
  return (
    <section className="
      row-start-3 row-end-4 col-start-1 col-end-4
      grid grid-rows-[auto_auto_auto_auto] grid-cols-[50%_50%] gap-y-32
      p-4
      max-[1024px]:grid-rows-[repeat(7,_auto)] max-[1024px]:gap-y-16
    "> 
      <h1 className="
        row-start-1 row-end-2 col-start-1 col-end-3 justify-self-center
        scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mt-4 text-center
        max-[1024px]:mb-8
      ">
        <span>Discover new ways to&nbsp;</span>
        <span><FlipLink /></span>
      </h1>
      <div className="
        row-start-2 row-end-3 col-start-1 col-end-2 justify-self-center
        max-[1024px]:col-end-3
      ">
        <h2 className="
          scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0 text-center
        ">Make it yours</h2>
        <p className="
          leading-7 [&:not(:first-child)]:mt-6 font-bold text-xl text-center
          max-[1024px]:w-[500px]
          max-[520px]:w-full max-[520px]:font-normal
        ">
          Hard-picked themes that you can copy and paste into your app
        </p>
      </div>
      <div
        className="
          row-start-2 row-end-3 col-start-2 col-end-3 justify-self-center
          rounded-[24px] bg-violet-500 w-[510px]
          max-[1024px]:row-start-3 max-[1024px]:row-end-4 max-[1024px]:col-start-1 max-[1024px]:mb-8
          max-[520px]:w-full
        "
        style={{
          transform: 'rotateY(-30deg) rotateX(15deg)',
          transformStyle: 'reserve-3d'
        }}
      >
        <motion.div
          className="
            relative w-[500px] rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]
            max-[520px]:w-full"
          initial={{
            transform: 'translateZ(8px) translateY(-2px)'
          }}
          animate={{
            transform: 'translateZ(32px) translateY(-8px)'
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 2,
            ease: 'easeInOut'
          }}
        >
          <img className="rounded-[24px] w-full h-full" src="/make-it-yours.gif" alt="image" />
        </motion.div>
      </div>
      <div className="
        row-start-3 row-end-4 col-start-2 col-end-3 justify-self-center
        max-[1024px]:row-start-4 max-[1024px]:row-end-5 max-[1024px]:col-start-1
      ">
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0 text-center">
          Beautiful Charts
        </h2>
        <p className="
          leading-7 [&:not(:first-child)]:mt-6 font-bold text-xl text-center
          max-[1024px]:w-[500px]
          max-[520px]:w-full max-[520px]:font-normal
        ">
          Built using Recharts. Copy and paste into your apps. Open source
        </p>
      </div>
      <div
        className="
          row-start-3 row-end-4 col-start-1 col-end-2 justify-self-center
          rounded-[24px] bg-violet-500 w-[510px]
          max-[1024px]:row-start-5 max-[1024px]:row-end-6 max-[1024px]:col-end-3 max-[1024px]:mb-8
          max-[520px]:w-full
        "
        style={{
          transform: 'rotateY(-30deg) rotateX(-15deg)',
          transformStyle: 'reserve-3d'
        }}
      >
        <motion.div
          className="
            relative w-[500px] rounded-[24px] border-2 border-b-4 border-l-4 border-white border-r-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px] ml-auto mr-0
            max-[520px]:w-full"
          initial={{
            transform: 'translateZ(8px) translateY(-2px)'
          }}
          animate={{
            transform: 'translateZ(32px) translateY(-8px)'
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 2,
            ease: 'easeInOut'
          }}
        >
          <img className="rounded-[24px] w-full h-full" src="/shadcnCharts.webp" alt="image" />
        </motion.div>
      </div>
      <div className="
        row-start-4 row-end-5 col-start-1 col-end-2 justify-self-center
        max-[1024px]:row-start-6 max-[1024px]:row-end-7 max-[1024px]:col-end-3
      ">
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0 text-center">
          Examples
        </h2>
        <p className="
          leading-7 [&:not(:first-child)]:mt-6 font-bold text-xl text-center
          max-[1024px]:w-[500px]
          max-[520px]:w-full max-[520px]:font-normal
        ">
          Dashboard, cards, authentication. Some examples built using the components. Use this as a guide to build your own.
        </p>
      </div>
      <div
        className="
          row-start-4 row-end-5 col-start-2 col-end-3 justify-self-center
          rounded-[24px] bg-violet-500 w-[510px]
          max-[1024px]:row-start-7 max-[1024px]:row-end-8 max-[1024px]:col-start-1
          max-[520px]:w-full
        "
        style={{
          transform: 'rotateY(-30deg) rotateX(15deg)',
          transformStyle: 'reserve-3d'
        }}
      >
        <motion.div
          className="
            relative w-[500px] rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]
            max-[520px]:w-full"
          initial={{
            transform: 'translateZ(8px) translateY(-2px)'
          }}
          animate={{
            transform: 'translateZ(32px) translateY(-8px)'
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 2,
            ease: 'easeInOut'
          }}
        >
          <img className="rounded-[24px] object-cover w-full h-full" src="/dashboard.webp" alt="image" />
        </motion.div>
      </div>
    </section>
  )
}

function FlipLink() {

  const [ scope, animate ] = useAnimate()

  useEffect(() => {
    animate([
      [
        '.first-word',
        {
          scale: [ 0, 1, 1, 1, 1, 1, 0 ],
          opacity: [ 0, 1, 1, 1, 1, 1, 0 ]
        },
        {
          duration: 2          
        }
      ],
      [
        '.second-word',
        {
          scale: [ 0, 1, 1, 1, 1, 1, 0 ],
          opacity: [ 0, 1, 1, 1, 1, 1, 0 ]
        },
        {
          duration: 2
        }
      ],
      [
        '.third-word',
        {
          scale: [ 0, 1, 1, 1, 1, 1, 0 ],
          opacity: [ 0, 1, 1, 1, 1, 1, 0 ]
        },
        {
          duration: 2
        }
      ]
    ], { repeat: Infinity })
  },[])

  return (
    <motion.div
      className="
        relative inline-block whitespace-nowrap text-[#0072ef] w-[140px] h-[48px]
        max-[1024px]:w-[100px]
      "
      ref={scope}
      initial={false}
    >
      <div className="first-word">&nbsp;style&nbsp;</div>
      <div className="second-word absolute inset-0">&nbsp;build&nbsp;</div>
      <div className="third-word absolute inset-0">create</div>
    </motion.div>
  )
}
