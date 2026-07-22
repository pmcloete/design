import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Page, Section } from "@/components/demo/section"

export default function AvatarDemo() {
  return (
    <Page title="Avatar" description="An image element with a fallback for representing the user.">
      <Section title="Default">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>PA</AvatarFallback>
        </Avatar>
      </Section>
    </Page>
  )
}
