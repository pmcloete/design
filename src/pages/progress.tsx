import { Progress } from "@/components/ui/progress"
import { Page, Section } from "@/components/demo/section"

export default function ProgressDemo() {
  return (
    <Page title="Progress" description="Displays an indicator showing the completion progress of a task.">
      <Section title="Default" className="w-full max-w-sm">
        <Progress value={66} />
      </Section>
    </Page>
  )
}
