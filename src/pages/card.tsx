import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Page, Section } from "@/components/demo/section"

export default function CardDemo() {
  return (
    <Page title="Card" description="Displays a card with header, content, and footer.">
      <Section title="Default">
        <Card className="w-[360px]">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage how you receive alerts.</CardDescription>
            <CardAction>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You have 3 unread messages and 1 pending invite.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="outline" className="flex-1">
              Dismiss
            </Button>
            <Button className="flex-1">View</Button>
          </CardFooter>
        </Card>
      </Section>
    </Page>
  )
}
