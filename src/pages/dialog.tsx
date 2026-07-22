import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Page, Section } from "@/components/demo/section"

export default function DialogDemo() {
  return (
    <Page title="Dialog" description="A window overlaid on the primary window, rendered here open by default for preview.">
      <Section title="Default (open)">
        <Dialog defaultOpen>
          <DialogTrigger asChild>
            <Button variant="outline">Edit profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[420px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when done.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Peter" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@arctix" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Section>
    </Page>
  )
}
