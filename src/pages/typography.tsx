import { Page, Section } from "@/components/demo/section"

export default function TypographyDemo() {
  return (
    <Page title="Typography" description="Type scale and text styles used throughout the system.">
      <Section title="Headings" className="flex-col items-start gap-4">
        <h1 className="text-4xl font-bold tracking-tight">Heading 1 — The quick brown fox</h1>
        <h2 className="text-3xl font-semibold tracking-tight">Heading 2 — The quick brown fox</h2>
        <h3 className="text-2xl font-semibold tracking-tight">Heading 3 — The quick brown fox</h3>
        <h4 className="text-xl font-semibold tracking-tight">Heading 4 — The quick brown fox</h4>
      </Section>
      <Section title="Body" className="flex-col items-start gap-3 max-w-xl">
        <p className="text-base leading-7">
          Body text — the quick brown fox jumps over the lazy dog. shadcn/ui pairs
          Geist Sans for interface text with a neutral gray scale for balanced,
          low-contrast surfaces.
        </p>
        <p className="text-sm text-muted-foreground">
          Muted text — used for secondary descriptions and captions.
        </p>
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
          const inline = "code";
        </code>
        <blockquote className="border-l-2 pl-4 italic text-muted-foreground">
          "Design is not just what it looks like — design is how it works."
        </blockquote>
      </Section>
    </Page>
  )
}
