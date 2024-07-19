import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function AccordionSection() {
  return (
    <div className="row-start-4 row-end-5 col-start-1 col-end-4 h-[210px] text-2xl">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <div className="text-xl">
              Yes. It adheres to the WAI-ARIA design pattern.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            <div className="text-xl">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            <div className="text-xl">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
