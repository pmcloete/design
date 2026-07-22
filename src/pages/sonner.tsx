import * as React from "react"
import { Toaster, toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Page, Section } from "@/components/demo/section"

export default function SonnerDemo() {
  React.useEffect(() => {
    const t = setTimeout(() => {
      toast("Event has been created", {
        description: "Monday, July 27th at 5:00 PM",
        action: { label: "Undo", onClick: () => {} },
      })
    }, 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <Page title="Sonner (Toast)" description="An opinionated toast component, triggered here automatically for preview.">
      <Section title="Default">
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Monday, July 27th at 5:00 PM",
              action: { label: "Undo", onClick: () => {} },
            })
          }
        >
          Show toast
        </Button>
      </Section>
      <Toaster position="bottom-right" />
    </Page>
  )
}
