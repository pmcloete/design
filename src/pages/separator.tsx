import { Separator } from "@/components/ui/separator"
import { Page, Section } from "@/components/demo/section"

export default function SeparatorDemo() {
  return (
    <Page title="Separator" description="Visually or semantically separates content.">
      <Section title="Horizontal" className="flex-col items-stretch w-full max-w-sm">
        <div className="text-sm">
          <div className="font-medium">shadcn/ui</div>
          <div className="text-muted-foreground">An accessible component library.</div>
        </div>
        <Separator className="my-2" />
        <div className="flex h-5 items-center gap-4 text-sm">
          <span>Blog</span>
          <Separator orientation="vertical" />
          <span>Docs</span>
          <Separator orientation="vertical" />
          <span>Source</span>
        </div>
      </Section>
    </Page>
  )
}
