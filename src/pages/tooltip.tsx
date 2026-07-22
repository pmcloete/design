import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Page, Section } from "@/components/demo/section"

export default function TooltipDemo() {
  return (
    <Page title="Tooltip" description="A popup showing information related to an element, rendered open by default for preview.">
      <Section title="Default (open)">
        <TooltipProvider>
          <Tooltip open>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Section>
    </Page>
  )
}
