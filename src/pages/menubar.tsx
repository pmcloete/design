import {
  Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger,
} from "@/components/ui/menubar"
import { Page, Section } from "@/components/demo/section"

export default function MenubarDemo() {
  return (
    <Page title="Menubar" description="A visually persistent, app-style menu bar. Click a menu to open it.">
      <Section title="Default">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab<MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo<MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
              <MenubarItem>Redo<MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Reload</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Section>
    </Page>
  )
}
