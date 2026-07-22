import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Page, Section } from "@/components/demo/section"

export default function SwitchDemo() {
  return (
    <Page title="Switch" description="A control that allows the user to toggle between on and off.">
      <Section title="Default">
        <div className="flex items-center gap-2">
          <Switch id="s1" />
          <Label htmlFor="s1">Off</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="s2" defaultChecked />
          <Label htmlFor="s2">On</Label>
        </div>
      </Section>
      <Section title="Disabled">
        <div className="flex items-center gap-2">
          <Switch id="s3" disabled />
          <Label htmlFor="s3" className="opacity-50">
            Disabled off
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="s4" disabled defaultChecked />
          <Label htmlFor="s4" className="opacity-50">
            Disabled on
          </Label>
        </div>
      </Section>
    </Page>
  )
}
