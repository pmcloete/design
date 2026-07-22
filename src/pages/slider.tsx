import { Slider } from "@/components/ui/slider"
import { Page, Section } from "@/components/demo/section"

export default function SliderDemo() {
  return (
    <Page title="Slider" description="An input where the user selects a value from within a given range.">
      <Section title="Default" className="w-full max-w-sm">
        <Slider defaultValue={[50]} max={100} step={1} />
      </Section>
      <Section title="Range" className="w-full max-w-sm">
        <Slider defaultValue={[25, 75]} max={100} step={1} />
      </Section>
    </Page>
  )
}
