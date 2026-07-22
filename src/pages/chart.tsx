import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig,
} from "@/components/ui/chart"
import { Page, Section } from "@/components/demo/section"

const data = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 173 },
  { month: "May", desktop: 209 },
  { month: "Jun", desktop: 264 },
]

const config = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
} satisfies ChartConfig

export default function ChartDemo() {
  return (
    <Page title="Chart" description="Composable charts built on Recharts.">
      <Section title="Bar chart" className="w-full">
        <ChartContainer config={config} className="min-h-[240px] w-full max-w-xl">
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
      </Section>
    </Page>
  )
}
