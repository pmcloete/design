import {
  Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Page, Section } from "@/components/demo/section"
import { BellIcon, UserIcon } from "lucide-react"

export default function ItemDemo() {
  return (
    <Page title="Item" description="A flexible row primitive for lists — settings rows, notification rows, menu rows.">
      <Section title="Default" className="w-full">
        <ItemGroup className="w-full max-w-md gap-1">
          <Item variant="outline">
            <ItemMedia variant="icon"><UserIcon /></ItemMedia>
            <ItemContent>
              <ItemTitle>Account</ItemTitle>
              <ItemDescription>Manage your profile and preferences.</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm">Edit</Button>
            </ItemActions>
          </Item>
          <ItemSeparator />
          <Item variant="outline">
            <ItemMedia variant="icon"><BellIcon /></ItemMedia>
            <ItemContent>
              <ItemTitle>Notifications</ItemTitle>
              <ItemDescription>Configure how you're notified.</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm">Edit</Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </Section>
    </Page>
  )
}
