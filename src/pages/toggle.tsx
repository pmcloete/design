import { Toggle } from "@/components/ui/toggle"
import { Page, Section } from "@/components/demo/section"
import { BoldIcon, ItalicIcon } from "lucide-react"

export default function ToggleDemo() {
  return (
    <Page title="Toggle" description="A two-state button that can be either on or off.">
      <Section title="Default">
        <Toggle aria-label="Toggle bold"><BoldIcon /></Toggle>
        <Toggle aria-label="Toggle italic" defaultPressed><ItalicIcon /></Toggle>
      </Section>
      <Section title="Outline">
        <Toggle variant="outline" aria-label="Toggle bold"><BoldIcon /></Toggle>
      </Section>
    </Page>
  )
}
