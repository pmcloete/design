import { Button } from "@/components/ui/button"
import { Page, Section } from "@/components/demo/section"
import { MailIcon } from "lucide-react"

export default function ButtonDemo() {
  const variants = ["default", "secondary", "outline", "ghost", "destructive", "link"] as const
  return (
    <Page title="Button" description="Displays a button or a component that looks like a button.">
      <Section title="Variants">
        {variants.map((v) => (
          <Button key={v} variant={v}>
            {v[0].toUpperCase() + v.slice(1)}
          </Button>
        ))}
      </Section>
      <Section title="Sizes">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" aria-label="Mail">
          <MailIcon />
        </Button>
      </Section>
      <Section title="With icon">
        <Button>
          <MailIcon /> Send email
        </Button>
      </Section>
      <Section title="States">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>
          Disabled outline
        </Button>
      </Section>
    </Page>
  )
}
