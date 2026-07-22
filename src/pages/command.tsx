import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut,
} from "@/components/ui/command"
import { Page, Section } from "@/components/demo/section"
import { CalendarIcon, SmileIcon, CalculatorIcon, SettingsIcon, UserIcon } from "lucide-react"

export default function CommandDemo() {
  return (
    <Page title="Command" description="A fast, composable command menu / palette.">
      <Section title="Default" className="w-full">
        <Command className="w-full max-w-md rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem><CalendarIcon /><span>Calendar</span></CommandItem>
              <CommandItem><SmileIcon /><span>Search Emoji</span></CommandItem>
              <CommandItem><CalculatorIcon /><span>Calculator</span></CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem><UserIcon /><span>Profile</span><CommandShortcut>⌘P</CommandShortcut></CommandItem>
              <CommandItem><SettingsIcon /><span>Settings</span><CommandShortcut>⌘S</CommandShortcut></CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </Section>
    </Page>
  )
}
