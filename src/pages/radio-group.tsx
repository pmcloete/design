import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Page, Section } from "@/components/demo/section"

export default function RadioGroupDemo() {
  return (
    <Page title="Radio Group" description="A set of checkable buttons where no more than one can be checked at a time.">
      <Section title="Default" className="flex-col items-start">
        <RadioGroup defaultValue="comfortable" className="gap-3">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="disabled" id="r4" disabled />
            <Label htmlFor="r4" className="opacity-50">
              Disabled
            </Label>
          </div>
        </RadioGroup>
      </Section>
    </Page>
  )
}
