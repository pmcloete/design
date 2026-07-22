import {
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuSeparator, ContextMenuShortcut,
} from "@/components/ui/context-menu"
import { Page, Section } from "@/components/demo/section"

export default function ContextMenuDemo() {
  return (
    <Page title="Context Menu" description="Displays a menu on right-click.">
      <Section title="Default — right-click the box">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[120px] w-[280px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-56">
            <ContextMenuItem>Back<ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
            <ContextMenuItem>Forward<ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem>
            <ContextMenuItem>Reload<ContextMenuShortcut>⌘R</ContextMenuShortcut></ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Save Page As...</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Section>
    </Page>
  )
}
