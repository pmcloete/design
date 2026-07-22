import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Page, Section } from "@/components/demo/section"
import { ChevronsUpDownIcon } from "lucide-react"

export default function CollapsibleDemo() {
  return (
    <Page title="Collapsible" description="An interactive component which expands/collapses a panel.">
      <Section title="Default (open)" className="w-full">
        <Collapsible defaultOpen className="w-full max-w-sm space-y-2">
          <div className="flex items-center justify-between gap-4">
            <h4 className="text-sm font-semibold">3 people starred this repository</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <ChevronsUpDownIcon />
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
          </CollapsibleContent>
        </Collapsible>
      </Section>
    </Page>
  )
}
