import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Page, Section } from "@/components/demo/section"

export default function AccordionDemo() {
  return (
    <Page title="Accordion" description="A vertically stacked set of interactive headings that each reveal a section of content.">
      <Section title="Default" className="w-full">
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Yes. It comes with default styles that match the design system.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>Yes. It's animated by default.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>
    </Page>
  )
}
