import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Page, Section } from "@/components/demo/section"

export default function TextareaDemo() {
  return (
    <Page title="Textarea" description="Displays a form textarea or a component that looks like a textarea.">
      <Section title="Default" className="flex-col items-start gap-2 max-w-sm">
        <Label htmlFor="msg">Message</Label>
        <Textarea id="msg" placeholder="Type your message here." />
      </Section>
      <Section title="Disabled" className="flex-col items-start gap-2 max-w-sm">
        <Textarea disabled placeholder="Disabled" />
      </Section>
    </Page>
  )
}
