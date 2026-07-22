import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Page, Section } from "@/components/demo/section"

export default function AlertDialogDemo() {
  return (
    <Page title="Alert Dialog" description="A modal dialog that interrupts the user with important content, rendered open by default for preview.">
      <Section title="Default (open)">
        <AlertDialog defaultOpen>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Delete account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="sm:max-w-[420px]">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Section>
    </Page>
  )
}
