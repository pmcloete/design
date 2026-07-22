import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Label } from "@/components/ui/label"
import { Page, Section } from "@/components/demo/section"

export default function NativeSelectDemo() {
  return (
    <Page title="Native Select" description="A styled wrapper around the browser's native <select> element.">
      <Section title="Default" className="flex-col items-start gap-2 max-w-sm">
        <Label htmlFor="ns-fruit">Fruit</Label>
        <NativeSelect id="ns-fruit" defaultValue="apple">
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
          <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
        </NativeSelect>
      </Section>
    </Page>
  )
}
