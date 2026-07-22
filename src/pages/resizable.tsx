import {
  ResizableHandle, ResizablePanel, ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Page, Section } from "@/components/demo/section"

export default function ResizableDemo() {
  return (
    <Page title="Resizable" description="Accessible resizable panel groups, built on react-resizable-panels.">
      <Section title="Default" className="w-full">
        <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg border md:min-w-[400px]">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[160px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[160px] items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Section>
    </Page>
  )
}
