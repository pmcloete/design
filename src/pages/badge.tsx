import { Badge } from "@/components/ui/badge"
import { Page, Section } from "@/components/demo/section"

export default function BadgeDemo() {
  const variants = ["default", "secondary", "outline", "destructive"] as const
  return (
    <Page title="Badge" description="Displays a badge or a component that looks like a badge.">
      <Section title="Variants">
        {variants.map((v) => (
          <Badge key={v} variant={v}>
            {v[0].toUpperCase() + v.slice(1)}
          </Badge>
        ))}
      </Section>
    </Page>
  )
}
