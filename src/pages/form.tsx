import { useForm } from "react-hook-form"
import {
  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Page, Section } from "@/components/demo/section"

type Values = { username: string }

export default function FormDemo() {
  const form = useForm<Values>({ defaultValues: { username: "" } })

  return (
    <Page title="Form" description="Composable form built on react-hook-form, with validation state wired through Field-style components.">
      <Section title="Default" className="w-full">
        <Form {...form}>
          <form className="w-full max-w-sm space-y-6" onSubmit={form.handleSubmit(() => {})}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="arctix" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Section>
    </Page>
  )
}
