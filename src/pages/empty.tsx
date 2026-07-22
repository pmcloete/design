import {
  Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import { Page, Section } from "@/components/demo/section"
import { InboxIcon } from "lucide-react"

export default function EmptyDemo() {
  return (
    <Page title="Empty" description="An empty state placeholder for lists, search results, or first-run screens.">
      <Section title="Default" className="w-full">
        <Empty className="w-full max-w-md border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon"><InboxIcon /></EmptyMedia>
            <EmptyTitle>No messages yet</EmptyTitle>
            <EmptyDescription>When you receive a message, it will show up here.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">Compose message</Button>
          </EmptyContent>
        </Empty>
      </Section>
    </Page>
  )
}
