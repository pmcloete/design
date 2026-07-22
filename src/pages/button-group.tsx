import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { Page, Section } from "@/components/demo/section"

export default function ButtonGroupDemo() {
  return (
    <Page title="Button Group" description="Groups related buttons together.">
      <Section title="Default">
        <ButtonGroup>
          <Button variant="outline">Left</Button>
          <Button variant="outline">Center</Button>
          <Button variant="outline">Right</Button>
        </ButtonGroup>
      </Section>
      <Section title="With text">
        <ButtonGroup>
          <ButtonGroupText>https://</ButtonGroupText>
          <Button variant="outline">example.com</Button>
        </ButtonGroup>
      </Section>
    </Page>
  )
}
