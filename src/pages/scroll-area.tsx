import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Page, Section } from "@/components/demo/section"

const tags = Array.from({ length: 30 }).map((_, i) => `Tag ${i + 1}`)

export default function ScrollAreaDemo() {
  return (
    <Page title="Scroll Area" description="Augments native scroll functionality with a custom, cross-browser scrollbar.">
      <Section title="Default">
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium">Tags</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm py-1">{tag}</div>
                <Separator className="my-1" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </Section>
    </Page>
  )
}
