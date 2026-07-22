import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Page, Section } from "@/components/demo/section"

export default function SheetDemo() {
  return (
    <Page title="Sheet" description="Extends the Dialog to display content sliding in from the edge of the screen, rendered open by default for preview.">
      <Section title="Default (open)">
        <Sheet defaultOpen>
          <SheetTrigger asChild>
            <Button variant="outline">Open sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile here.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Section>
    </Page>
  )
}
