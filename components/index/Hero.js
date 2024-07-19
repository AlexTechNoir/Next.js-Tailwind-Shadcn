import { useRef, useEffect } from 'react'
import { Label, Pie, PieChart } from 'recharts'

import { Button } from "@/components/ui/button"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { browser: "Accessible", visitors: 100, fill: "var(--color-chrome)" },
  { browser: "Reusable", visitors: 100, fill: "var(--color-safari)" },
  { browser: "Responsive", visitors: 100, fill: "var(--color-firefox)" },
  { browser: "Fast", visitors: 100, fill: "var(--color-edge)" },
  { browser: "Best Practices", visitors: 100, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
}

export default function Hero() {

  const words = [ 'library', 'website', 'collection' ]

  const typeWriterRef = useRef(null)

  let sleepTime = 100
  let curWordIndex = 0

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const writeLoop = async () => {
    while (true) {
      let curWord = words[curWordIndex]

      for (let i = 0; i < curWord.length; i++) {
        typeWriterRef.current.innerText = curWord.substring(0, i + 1)
        await sleep(sleepTime)
      }

      await sleep(sleepTime * 10)

      for (let i = curWord.length; i > 0; i--) {
        typeWriterRef.current.innerText = curWord.substring(0, i - 1)
        await sleep(sleepTime)
      }

      await sleep(sleepTime)

      if (curWordIndex === words.length - 1) {
        curWordIndex = 0
      } else {
        curWordIndex++
      }
    }
  }

  useEffect(() => {
    writeLoop()
  },[])

  return (
    <section className="row-start-1 row-end-2 col-start-2 col-end-3 flex justify-between max-[845px]:justify-center">
      <div className="max-[845px]:w-[540px] max-[586px]:w-full">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mt-4">
          <span className="max-[586px]:block">Build your component&nbsp;</span>
          <span className="text-[#0072ef] font-bold" ref={typeWriterRef}></span>
          <span className="text-[#0072ef] animate-[blink_1s_linear_infinite]">|</span>
        </h1>
        <h2 className="
          scroll-m-20 pb-2 text-3xl font-normal tracking-tight first:mt-0 mt-8 w-[650px]
          max-[1024px]:text-2xl max-[1024px]:w-[450px] max-[586px]:w-full
        ">
          Beautifully designed components that you can copy and paste into your apps.
        </h2>
        <Button className="mt-8 bg-[#0072ef] hover:bg-[#4154ff]">Get Started</Button>
      </div>
      <div className="w-[270px] max-[1024px]:w-[260px] max-[845px]:hidden">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          50
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Components
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </section>
  )
}
