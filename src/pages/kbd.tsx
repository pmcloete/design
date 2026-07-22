import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Page, Section } from "@/components/demo/section"

export default function KbdDemo() {
  return (
    <Page title="Kbd" description="Displays keyboard shortcuts.">
      <Section title="Default">
        <Kbd>⌘</Kbd>
        <Kbd>Ctrl</Kbd>
        <Kbd>Enter</Kbd>
      </Section>
      <Section title="Group">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>P</Kbd>
        </KbdGroup>
      </Section>
    </Page>
  )
}
