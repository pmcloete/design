import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarProvider, SidebarTrigger,
} from "@/components/ui/sidebar"
import { Page } from "@/components/demo/section"
import { HomeIcon, InboxIcon, SettingsIcon } from "lucide-react"

const items = [
  { title: "Home", icon: HomeIcon },
  { title: "Inbox", icon: InboxIcon },
  { title: "Settings", icon: SettingsIcon },
]

export default function SidebarDemo() {
  return (
    <Page title="Sidebar" description="A composable, themeable app sidebar layout.">
      <div className="w-full max-w-2xl overflow-hidden rounded-lg border">
        <SidebarProvider className="min-h-[360px]" style={{ "--sidebar-width": "14rem" } as React.CSSProperties}>
          <Sidebar collapsible="none" className="border-r">
            <SidebarHeader>
              <span className="px-2 text-sm font-semibold">Acme Inc</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton isActive={item.title === "Home"}>
                          <item.icon />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset>
            <div className="flex items-center gap-2 border-b p-3">
              <SidebarTrigger />
              <span className="text-sm text-muted-foreground">Page content</span>
            </div>
            <div className="p-6 text-sm text-muted-foreground">Main content area.</div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </Page>
  )
}
