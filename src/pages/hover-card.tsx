import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Page, Section } from "@/components/demo/section"
import { CalendarIcon } from "lucide-react"

export default function HoverCardDemo() {
  return (
    <Page title="Hover Card" description="For sighted users to preview content available behind a link. Hover to open.">
      <Section title="Default">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@shadcn</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-72">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@shadcn</h4>
                <p className="text-sm text-muted-foreground">Building shadcn/ui.</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground pt-1">
                  <CalendarIcon className="size-3" /> Joined December 2021
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Section>
    </Page>
  )
}
