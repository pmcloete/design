import { Page } from "@/components/demo/section"

const groups: { title: string; tokens: [string, string][] }[] = [
  {
    title: "Base",
    tokens: [
      ["background", "bg-background border text-foreground"],
      ["foreground", "bg-foreground text-background"],
      ["card", "bg-card border text-card-foreground"],
      ["popover", "bg-popover border text-popover-foreground"],
    ],
  },
  {
    title: "Brand",
    tokens: [
      ["primary", "bg-primary text-primary-foreground"],
      ["secondary", "bg-secondary text-secondary-foreground"],
      ["accent", "bg-accent text-accent-foreground"],
      ["muted", "bg-muted text-muted-foreground"],
    ],
  },
  {
    title: "Status",
    tokens: [["destructive", "bg-destructive text-white"]],
  },
  {
    title: "Structure",
    tokens: [
      ["border", "bg-border border"],
      ["input", "bg-input border"],
      ["ring", "bg-ring border"],
    ],
  },
  {
    title: "Charts",
    tokens: [
      ["chart-1", "bg-chart-1 text-white"],
      ["chart-2", "bg-chart-2 text-white"],
      ["chart-3", "bg-chart-3 text-white"],
      ["chart-4", "bg-chart-4 text-white"],
      ["chart-5", "bg-chart-5 text-white"],
    ],
  },
  {
    title: "Sidebar",
    tokens: [
      ["sidebar", "bg-sidebar border text-sidebar-foreground"],
      ["sidebar-primary", "bg-sidebar-primary text-sidebar-primary-foreground"],
      ["sidebar-accent", "bg-sidebar-accent text-sidebar-accent-foreground"],
      ["sidebar-border", "bg-sidebar-border border"],
    ],
  },
]

export default function ColorsDemo() {
  return (
    <Page title="Colors" description="Semantic color tokens — base color: Neutral. Each swatch names its CSS variable / Tailwind class.">
      <div className="flex flex-col gap-8">
        {groups.map((g) => (
          <div key={g.title} className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {g.title}
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {g.tokens.map(([name, cls]) => (
                <div key={name} className="flex flex-col gap-2">
                  <div className={`h-16 rounded-md ${cls}`} />
                  <span className="text-xs font-mono text-muted-foreground">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Page>
  )
}
