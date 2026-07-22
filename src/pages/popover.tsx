import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Page, Section } from "@/components/demo/section"

export default function PopoverDemo() {
  return (
    <Page title="Popover" description="Displays rich content in a portal, rendered open by default for preview.">
      <Section title="Default (open)">
        <Popover defaultOpen>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-72">
            <div className="grid gap-3">
              <div className="space-y-1">
                <h4 className="leading-none font-medium">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid grid-cols-3 items-center gap-3">
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
              </div>
              <div className="grid grid-cols-3 items-center gap-3">
                <Label htmlFor="height">Height</Label>
                <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </Section>
    </Page>
  )
}
