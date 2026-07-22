import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Page, Section } from "@/components/demo/section"

export default function InputDemo() {
  return (
    <Page title="Input" description="Displays a form input field.">
      <Section title="Default" className="flex-col items-start gap-2 max-w-sm">
        <Input placeholder="Email" />
      </Section>
      <Section title="With label" className="flex-col items-start gap-2 max-w-sm">
        <Label htmlFor="demo-email">Email</Label>
        <Input id="demo-email" type="email" placeholder="you@example.com" />
      </Section>
      <Section title="Disabled" className="flex-col items-start gap-2 max-w-sm">
        <Input disabled placeholder="Disabled" />
      </Section>
      <Section title="Invalid" className="flex-col items-start gap-2 max-w-sm">
        <Input aria-invalid placeholder="Invalid value" />
      </Section>
      <Section title="File" className="flex-col items-start gap-2 max-w-sm">
        <Input type="file" />
      </Section>
    </Page>
  )
}
