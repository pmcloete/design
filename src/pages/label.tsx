import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Page, Section } from "@/components/demo/section"

export default function LabelDemo() {
  return (
    <Page title="Label" description="Renders an accessible label associated with controls.">
      <Section title="Default">
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </Section>
    </Page>
  )
}
