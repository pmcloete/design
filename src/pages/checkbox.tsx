import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Page, Section } from "@/components/demo/section"

export default function CheckboxDemo() {
  return (
    <Page title="Checkbox" description="A control that allows the user to toggle between checked and not checked.">
      <Section title="Default">
        <div className="flex items-center gap-2">
          <Checkbox id="c1" />
          <Label htmlFor="c1">Unchecked</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="c2" defaultChecked />
          <Label htmlFor="c2">Checked</Label>
        </div>
      </Section>
      <Section title="Disabled">
        <div className="flex items-center gap-2">
          <Checkbox id="c3" disabled />
          <Label htmlFor="c3" className="opacity-50">
            Disabled
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="c4" disabled defaultChecked />
          <Label htmlFor="c4" className="opacity-50">
            Disabled checked
          </Label>
        </div>
      </Section>
    </Page>
  )
}
