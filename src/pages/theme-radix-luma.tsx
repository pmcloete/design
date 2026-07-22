import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction,
} from "@/components/ui/card"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarProvider, SidebarTrigger,
} from "@/components/ui/sidebar"
import { HomeIcon, InboxIcon, SettingsIcon, TriangleAlertIcon } from "lucide-react"

const swatchGroups: { title: string; tokens: [string, string][] }[] = [
  {
    title: "Base",
    tokens: [
      ["background", "bg-background border text-foreground"],
      ["foreground", "bg-foreground text-background"],
      ["card", "bg-card border text-card-foreground"],
      ["popover", "bg-popover border text-popover-foreground"],
    ],
  },
  {
    title: "Brand",
    tokens: [
      ["primary", "bg-primary text-primary-foreground"],
      ["secondary", "bg-secondary text-secondary-foreground"],
      ["accent", "bg-accent text-accent-foreground"],
      ["muted", "bg-muted text-muted-foreground"],
    ],
  },
  {
    title: "Charts",
    tokens: [
      ["chart-1", "bg-chart-1 text-white"],
      ["chart-2", "bg-chart-2 text-white"],
      ["chart-3", "bg-chart-3 text-white"],
      ["chart-4", "bg-chart-4 text-white"],
      ["chart-5", "bg-chart-5 text-white"],
    ],
  },
]

const sidebarItems = [
  { title: "Home", icon: HomeIcon },
  { title: "Inbox", icon: InboxIcon },
  { title: "Settings", icon: SettingsIcon },
]

export default function ThemeRadixLumaDemo() {
  const [dark, setDark] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground p-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 border-b pb-4">
          <h1 className="text-2xl font-semibold tracking-tight">Radix Luma (preset bLsZBAHof)</h1>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
            Resolved from{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              pnpm dlx shadcn@latest init --preset bLsZBAHof --base radix --template next
            </code>
            . Same components as the rest of this design system — only the
            tokens below (colors, radius, fonts) change, scoped to this page
            via a <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.theme-radix-luma</code> wrapper class so it
            doesn&apos;t affect the Neutral theme used everywhere else.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <Badge variant="secondary">style: radix-luma</Badge>
            <Badge variant="secondary">base color: mist</Badge>
            <Badge variant="secondary">radius: 0.45rem</Badge>
            <Badge variant="secondary">font: Instrument Sans / Inter</Badge>
            <Badge variant="secondary">icons: lucide</Badge>
            <Badge variant="secondary">menu: inverted, bold accent</Badge>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <Switch id="dark-toggle" checked={dark} onCheckedChange={setDark} />
          <Label htmlFor="dark-toggle">Preview dark mode</Label>
        </div>

        <div className={cn("theme-radix-luma rounded-xl border p-8", dark && "dark")}>
          <div className="flex flex-col gap-10 bg-background p-2 text-foreground">
            <section className="flex flex-col gap-3">
              <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Colors
              </h2>
              <div className="flex flex-col gap-6">
                {swatchGroups.map((g) => (
                  <div key={g.title} className="flex flex-col gap-3">
                    <h3 className="text-xs font-medium text-muted-foreground">{g.title}</h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                      {g.tokens.map(([name, cls]) => (
                        <div key={name} className="flex flex-col gap-2">
                          <div className={`h-14 rounded-md ${cls}`} />
                          <span className="font-mono text-xs text-muted-foreground">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator />

            <section className="flex flex-col gap-3">
              <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Buttons &amp; Badges
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </section>

            <Separator />

            <section className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Upgrade plan</CardTitle>
                  <CardDescription>Billed monthly, cancel anytime.</CardDescription>
                  <CardAction>
                    <Badge>Popular</Badge>
                  </CardAction>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>RL</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">Radix Luma</p>
                      <p className="text-muted-foreground">mist base color</p>
                    </div>
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Continue</Button>
                </CardFooter>
              </Card>

              <div className="flex flex-col gap-4">
                <Alert>
                  <TriangleAlertIcon />
                  <AlertTitle>Heads up</AlertTitle>
                  <AlertDescription>This alert uses the theme&apos;s accent and border tokens.</AlertDescription>
                </Alert>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="text-sm text-muted-foreground">
                    Update your account details here.
                  </TabsContent>
                  <TabsContent value="password" className="text-sm text-muted-foreground">
                    Change your password here.
                  </TabsContent>
                </Tabs>
              </div>
            </section>

            <Separator />

            <section className="flex flex-col gap-3">
              <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Sidebar
              </h2>
              <div className="w-full max-w-lg overflow-hidden rounded-lg border">
                <SidebarProvider className="min-h-[280px]" style={{ "--sidebar-width": "13rem" } as React.CSSProperties}>
                  <Sidebar collapsible="none" className="border-r">
                    <SidebarHeader>
                      <span className="px-2 text-sm font-semibold">Acme Inc</span>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            {sidebarItems.map((item) => (
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
            </section>
          </div>
        </div>

        <div className="mt-8 rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Using this theme for real</p>
          <p className="mt-1">
            Run the command above in a Next.js project to scaffold it with the shadcn CLI directly, or
            copy the <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">.theme-radix-luma</code> /{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">.theme-radix-luma.dark</code> blocks
            from this project&apos;s <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">src/index.css</code>{" "}
            into the starter kit and swap them onto <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">:root</code> /{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">.dark</code> to make it the default theme instead of Neutral.
          </p>
        </div>
      </div>
    </div>
  )
}
