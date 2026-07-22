import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Page, Section } from "@/components/demo/section"

export default function NavigationMenuDemo() {
  return (
    <Page title="Navigation Menu" description="A collection of links for navigating websites. Click a trigger to open.">
      <Section title="Default">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 p-2">
                  <li>
                    <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#">Installation</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Section>
    </Page>
  )
}
