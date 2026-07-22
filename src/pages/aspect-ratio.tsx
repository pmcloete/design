import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Page, Section } from "@/components/demo/section"

export default function AspectRatioDemo() {
  return (
    <Page title="Aspect Ratio" description="Displays content within a desired ratio.">
      <Section title="16:9" className="w-full max-w-md">
        <AspectRatio ratio={16 / 9} className="flex items-center justify-center rounded-md bg-gradient-to-br from-muted to-accent">
          <span className="text-sm text-muted-foreground">16 / 9</span>
        </AspectRatio>
      </Section>
    </Page>
  )
}
