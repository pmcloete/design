import { Spinner } from "@/components/ui/spinner"
import { Page, Section } from "@/components/demo/section"

export default function SpinnerDemo() {
  return (
    <Page title="Spinner" description="A loading indicator.">
      <Section title="Sizes">
        <Spinner className="size-4" />
        <Spinner className="size-6" />
        <Spinner className="size-8" />
      </Section>
    </Page>
  )
}
