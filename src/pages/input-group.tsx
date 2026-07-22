import {
  InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText,
} from "@/components/ui/input-group"
import { Page, Section } from "@/components/demo/section"
import { SearchIcon, MailIcon } from "lucide-react"

export default function InputGroupDemo() {
  return (
    <Page title="Input Group" description="Compose an input with icons, text, or buttons attached.">
      <Section title="With icon" className="max-w-sm">
        <InputGroup>
          <InputGroupAddon><SearchIcon /></InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
        </InputGroup>
      </Section>
      <Section title="With button" className="max-w-sm">
        <InputGroup>
          <InputGroupAddon><MailIcon /></InputGroupAddon>
          <InputGroupInput placeholder="you@example.com" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="sm">Send</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Section>
      <Section title="With text prefix" className="max-w-sm">
        <InputGroup>
          <InputGroupAddon><InputGroupText>https://</InputGroupText></InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
        </InputGroup>
      </Section>
    </Page>
  )
}
