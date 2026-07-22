import { Page, Section } from "@/components/demo/section"

const radii = [
  { name: "sm", cls: "rounded-sm" },
  { name: "md", cls: "rounded-md" },
  { name: "lg", cls: "rounded-lg" },
  { name: "xl", cls: "rounded-xl" },
  { name: "2xl", cls: "rounded-2xl" },
  { name: "3xl", cls: "rounded-3xl" },
  { name: "4xl", cls: "rounded-4xl" },
]

export default function SpacingDemo() {
  return (
    <Page title="Radius" description="Corner radius scale, derived from a single --radius token (0.625rem base).">
      <Section title="Scale" className="items-end">
        {radii.map((r) => (
          <div key={r.name} className="flex flex-col items-center gap-2">
            <div className={`h-16 w-16 border-2 border-foreground/80 ${r.cls}`} />
            <span className="text-xs font-mono text-muted-foreground">{r.name}</span>
          </div>
        ))}
      </Section>
    </Page>
  )
}
