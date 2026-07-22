import {
  Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldSeparator, FieldSet, FieldLegend,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Page, Section } from "@/components/demo/section"

export default function FieldDemo() {
  return (
    <Page title="Field" description="A layout primitive for building consistent forms: label, control, and description.">
      <Section title="Default" className="w-full">
        <FieldSet className="w-full max-w-sm">
          <FieldLegend>Profile</FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fd-name">Name</FieldLabel>
              <Input id="fd-name" placeholder="Peter" />
              <FieldDescription>Your full display name.</FieldDescription>
            </Field>
            <FieldSeparator />
            <Field orientation="horizontal">
              <Checkbox id="fd-newsletter" />
              <FieldContent>
                <FieldLabel htmlFor="fd-newsletter">Subscribe to newsletter</FieldLabel>
                <FieldDescription>Get occasional product updates.</FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
        </FieldSet>
      </Section>
    </Page>
  )
}
