import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Page, Section } from "@/components/demo/section"

export default function TabsDemo() {
  return (
    <Page title="Tabs" description="A set of layered sections of content, known as tab panels.">
      <Section title="Default" className="w-full">
        <Tabs defaultValue="account" className="w-[380px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="disabled" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="text-sm text-muted-foreground">
            Update your account details here.
          </TabsContent>
          <TabsContent value="password" className="text-sm text-muted-foreground">
            Change your password here.
          </TabsContent>
        </Tabs>
      </Section>
    </Page>
  )
}
