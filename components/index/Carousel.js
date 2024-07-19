import { useState, useRef, useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const imgs = [
  '/carousel/1.jpg',
  '/carousel/2.jpg',
  '/carousel/3.jpg',
  '/carousel/4.jpg',
  '/carousel/5.jpg'
]

export default function CarouselSection() {

  const [ isZoomed, setIsZoomed ] = useState(false)

  const zoomImgRef = useRef(null)

  const toggleZoom = e => {
    if (!isZoomed) {
      setIsZoomed(true)
      zoomImgRef.current.src = e.target.src
    } else {
      setIsZoomed(false)
      zoomImgRef.current.src = null
    }
  }

  const closeOnEsc = e => {
    if (e.key === 'Escape') {
      setIsZoomed(false)
      zoomImgRef.current.src = null
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', closeOnEsc)

    return () => window.removeEventListener('keydown', closeOnEsc)
  },[])

  return (
    <section className="row-start-2 row-end-3 col-start-1 col-end-4">
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {imgs.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <img className="w-full h-full object-cover" src={img} alt="image" onClick={e => toggleZoom(e)} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="rounded-none -top-7 left-0 bg-blue-600 text-white" />
        <CarouselNext className="rounded-none -top-7 left-10 bg-blue-600 text-white" />
      </Carousel>
      <div
        className={`
          fixed z-10 pt-[100px] left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.9)]
          ${isZoomed ? 'block' : 'hidden'}
        `}
        onClick={() => toggleZoom(null)}
      >
        <span
          className="
            absolute top-[15px] right-[35px] text-[#f1f1f1] text-[40px] font-bold transition-[0.3s] 
            hover:text-[#bbb] hover:text-[no-underline] hover:cursor-pointer
            focus:text-[#bbb] focus:text-[no-underline] focus:cursor-pointer
          "
          onClick={() => toggleZoom(null)}
        >
          &times;
        </span>
        <img
          className="m-auto block w-[80%] max-w-[700px] animate-[zoom_0.6s] max-w-[700px]:w-full"
          ref={zoomImgRef}
          alt="image"
        />
      </div>
    </section>
  )
}
