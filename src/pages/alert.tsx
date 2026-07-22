import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Page, Section } from "@/components/demo/section"
import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"

export default function AlertDemo() {
  return (
    <Page title="Alert" description="Displays a callout for user attention.">
      <Section title="Default" className="flex-col items-stretch max-w-lg">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>Success! Your changes have been saved.</AlertTitle>
          <AlertDescription>
            This is an alert with an icon, a title and a description.
          </AlertDescription>
        </Alert>
      </Section>
      <Section title="Destructive" className="flex-col items-stretch max-w-lg">
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Unable to process your payment.</AlertTitle>
          <AlertDescription>
            Please verify your billing information and try again.
          </AlertDescription>
        </Alert>
      </Section>
    </Page>
  )
}
