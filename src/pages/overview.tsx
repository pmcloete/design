const groups: { title: string; items: { slug: string; name: string }[] }[] = [
  {
    title: "Foundations",
    items: [
      { slug: "colors", name: "Colors" },
      { slug: "typography", name: "Typography" },
      { slug: "spacing", name: "Radius" },
    ],
  },
  {
    title: "Forms",
    items: [
      { slug: "input", name: "Input" },
      { slug: "textarea", name: "Textarea" },
      { slug: "select", name: "Select" },
      { slug: "checkbox", name: "Checkbox" },
      { slug: "radio-group", name: "Radio Group" },
      { slug: "switch", name: "Switch" },
      { slug: "label", name: "Label" },
    ],
  },
  {
    title: "Actions & Feedback",
    items: [
      { slug: "button", name: "Button" },
      { slug: "badge", name: "Badge" },
      { slug: "alert", name: "Alert" },
      { slug: "sonner", name: "Sonner (Toast)" },
    ],
  },
  {
    title: "Overlays",
    items: [
      { slug: "dialog", name: "Dialog" },
      { slug: "dropdown-menu", name: "Dropdown Menu" },
      { slug: "popover", name: "Popover" },
      { slug: "tooltip", name: "Tooltip" },
    ],
  },
  {
    title: "Layout & Data",
    items: [
      { slug: "card", name: "Card" },
      { slug: "separator", name: "Separator" },
      { slug: "table", name: "Table" },
      { slug: "tabs", name: "Tabs" },
      { slug: "avatar", name: "Avatar" },
    ],
  },
  {
    title: "Themes",
    items: [
      { slug: "theme-radix-luma", name: "Radix Luma (preset bLsZBAHof)" },
    ],
  },
]

export default function Overview() {
  return (
    <div className="min-h-screen bg-background text-foreground p-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 border-b pb-6">
          <h1 className="text-3xl font-semibold tracking-tight">
            shadcn/ui — Design System
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Derived from shadcn/ui (radix base, new-york-v4 style, neutral base
            color). MIT licensed, open source.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {groups.map((g) => (
            <div key={g.title} className="flex flex-col gap-3">
              <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {g.title}
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {g.items.map((item) => (
                  <a
                    key={item.slug}
                    href={`/pages/${item.slug}/`}
                    className="rounded-lg border bg-card px-4 py-3 text-sm font-medium text-card-foreground shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
