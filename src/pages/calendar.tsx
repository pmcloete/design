import { Calendar } from "@/components/ui/calendar"
import { Page, Section } from "@/components/demo/section"

export default function CalendarDemo() {
  return (
    <Page title="Calendar" description="A date field component built on top of react-day-picker.">
      <Section title="Default">
        <Calendar mode="single" defaultMonth={new Date(2026, 6, 1)} selected={new Date(2026, 6, 21)} className="rounded-md border" />
      </Section>
    </Page>
  )
}
