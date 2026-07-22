import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Page, Section } from "@/components/demo/section"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export default function ToggleGroupDemo() {
  return (
    <Page title="Toggle Group" description="A set of two-state buttons that can be toggled on or off.">
      <Section title="Multiple">
        <ToggleGroup type="multiple" defaultValue={["bold"]}>
          <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon /></ToggleGroupItem>
        </ToggleGroup>
      </Section>
    </Page>
  )
}
