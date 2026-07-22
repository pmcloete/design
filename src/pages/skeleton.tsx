import { Skeleton } from "@/components/ui/skeleton"
import { Page, Section } from "@/components/demo/section"

export default function SkeletonDemo() {
  return (
    <Page title="Skeleton" description="Used to show a placeholder while content is loading.">
      <Section title="Default">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </div>
      </Section>
    </Page>
  )
}
