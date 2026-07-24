import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MailIcon, AlertCircleIcon, AlertTriangleIcon, CheckCircle2Icon, CalendarIcon, SmileIcon, CalculatorIcon, SettingsIcon, UserIcon, ChevronsUpDownIcon, InboxIcon, BellIcon, BoldIcon, ItalicIcon, UnderlineIcon, SearchIcon, TrendingUpIcon, XIcon, PlusIcon, DownloadIcon, Trash2Icon, ExternalLinkIcon, BanIcon } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment"
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Label as RechartsLabel, Pie, PieChart, XAxis } from "recharts"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut,
} from "@/components/ui/command"
import {
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuSeparator, ContextMenuShortcut,
} from "@/components/ui/context-menu"
import {
  Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle,
} from "@/components/ui/empty"
import {
  Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldSeparator, FieldSet, FieldLegend, FieldTitle,
} from "@/components/ui/field"
import { useForm } from "react-hook-form"
import {
  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import {
  InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput,
} from "@/components/ui/input-group"
import {
  InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle,
} from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import {
  ResizableHandle, ResizablePanel, ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 173 },
  { month: "May", desktop: 209 },
  { month: "Jun", desktop: 264 },
]
const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
} satisfies ChartConfig

const areaChartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
]

const areaChartConfig = {
  visitors: { label: "Visitors" },
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = useState("90d")
  const filteredData = areaChartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="w-full max-w-3xl pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={areaChartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area dataKey="mobile" type="natural" fill="url(#fillMobile)" stroke="var(--color-mobile)" stackId="a" />
            <Area dataKey="desktop" type="natural" fill="url(#fillDesktop)" stroke="var(--color-desktop)" stackId="a" />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const pieChartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge: { label: "Edge", color: "var(--chart-4)" },
  other: { label: "Other", color: "var(--chart-5)" },
} satisfies ChartConfig

function ChartPieDonutText() {
  const totalVisitors = useMemo(() => {
    return pieChartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex w-full max-w-sm flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={pieChartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={pieChartData} dataKey="visitors" nameKey="browser" innerRadius={60} strokeWidth={5}>
              <RechartsLabel
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUpIcon className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

const barInteractiveChartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
]

const barInteractiveChartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

function ChartBarInteractive() {
  const [activeChart, setActiveChart] =
    useState<keyof typeof barInteractiveChartConfig>("desktop")
  const total = useMemo(
    () => ({
      desktop: barInteractiveChartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: barInteractiveChartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )
  return (
    <Card className="w-full max-w-2xl py-0">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:py-0!">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {(["desktop", "mobile"] as const).map((key) => {
            const chart = key
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {barInteractiveChartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={barInteractiveChartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={barInteractiveChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

const gradientChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const gradientChartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

function ChartAreaGradient() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Gradient</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={gradientChartConfig}>
          <AreaChart
            accessibilityLayer
            data={gradientChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUpIcon className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

function FormExample() {
  const form = useForm<{ username: string }>({ defaultValues: { username: "" } })
  return (
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
  )
}

function SonnerPosition() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", { position: "top-left" })
        }
      >
        Top Left
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", { position: "top-center" })
        }
      >
        Top Center
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", { position: "top-right" })
        }
      >
        Top Right
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", { position: "bottom-left" })
        }
      >
        Bottom Left
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", { position: "bottom-center" })
        }
      >
        Bottom Center
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", { position: "bottom-right" })
        }
      >
        Bottom Right
      </Button>
    </div>
  )
}

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const

function ComboboxAutoHighlight() {
  return (
    <Combobox items={frameworks} autoHighlight>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const attachmentImages = [
  {
    name: "workspace.png",
    meta: "PNG · 820 KB",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80",
    alt: "Workspace",
  },
  {
    name: "desk-reference.jpg",
    meta: "JPG · 1.1 MB",
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80",
    alt: "Desk",
  },
  {
    name: "office-reference.jpg",
    meta: "JPG · 940 KB",
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80",
    alt: "Office",
  },
]

function AttachmentImage() {
  return (
    <div className="mx-auto w-full max-w-sm py-12">
      <AttachmentGroup className="w-full">
        {attachmentImages.map((image) => (
          <Attachment key={image.name} orientation="vertical">
            <AttachmentMedia variant="image">
              <img src={image.src} alt={image.alt} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>{image.name}</AttachmentTitle>
              <AttachmentDescription>{image.meta}</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label={`Remove ${image.name}`}>
                <XIcon />
              </AttachmentAction>
            </AttachmentActions>
            <AttachmentTrigger asChild>
              <a
                href={image.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${image.name}`}
              />
            </AttachmentTrigger>
          </Attachment>
        ))}
      </AttachmentGroup>
    </div>
  )
}

const cardSpacingOptions = [
  { className: "[--card-spacing:--spacing(4)]", label: "16px", value: "4" },
  { className: "[--card-spacing:--spacing(5)]", label: "20px", value: "5" },
  { className: "[--card-spacing:--spacing(6)]", label: "24px", value: "6" },
  { className: "[--card-spacing:--spacing(8)]", label: "32px", value: "8" },
]

function CardSpacingDemo() {
  const [spacing, setSpacing] = useState("4")
  const selectedSpacing = cardSpacingOptions.find(
    (option) => option.value === spacing
  )
  return (
    <div className="flex w-full flex-col gap-4">
      <ToggleGroup
        type="single"
        value={spacing}
        onValueChange={(value) => {
          if (value) {
            setSpacing(value)
          }
        }}
        variant="outline"
        size="sm"
      >
        {cardSpacingOptions.map((option) => (
          <ToggleGroupItem key={option.value} value={option.value}>
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {/*
        --card-spacing is set here, on the shared wrapper, not on each Card.
        Custom properties inherit down through the whole subtree, so every
        Card nested inside — now, or any added later — picks it up
        automatically without needing to be wired individually.
      */}
      <div
        className={cn(
          "flex w-full flex-wrap items-start gap-6",
          selectedSpacing?.className
        )}
      >
        <Card className="w-[340px]">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage how you receive alerts.</CardDescription>
            <CardAction>
              <Button variant="ghost" size="sm">Edit</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You have 3 unread messages.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="outline" className="flex-1">Dismiss</Button>
            <Button className="flex-1">View</Button>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email-spacing">Email</Label>
                  <Input
                    id="email-spacing"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password-spacing">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password-spacing" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function FieldChoiceCard() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLegend variant="label">Compute Environment</FieldLegend>
        <FieldDescription>
          Select the compute environment for your cluster.
        </FieldDescription>
        <RadioGroup defaultValue="kubernetes">
          <FieldLabel htmlFor="sc-fcc-kubernetes">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Kubernetes</FieldTitle>
                <FieldDescription>
                  Run GPU workloads on a K8s cluster.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value="kubernetes" id="sc-fcc-kubernetes" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="sc-fcc-vm">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Virtual Machine</FieldTitle>
                <FieldDescription>
                  Access a cluster to run GPU workloads.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value="vm" id="sc-fcc-vm" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldSet>
    </FieldGroup>
  )
}

interface Artwork {
  artist: string
  art: string
}

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

function Nav() {
  const sections = [
    "Colors", "Typography", "Radius", "Button", "Button - Icon", "Input", "Textarea", "Select",
    "Checkbox", "Radio Group", "Switch", "Label", "Card", "Dialog",
    "Dropdown Menu", "Popover", "Tabs", "Badge", "Avatar", "Tooltip", "Alert",
    "Table", "Separator",
    "Accordion", "Alert Dialog", "Aspect Ratio", "Attachment", "Breadcrumb", "Button Group",
    "Calendar", "Carousel", "Chart", "Chart Interactive", "Collapsible", "Combobox", "Command", "Context Menu",
    "Drawer", "Empty", "Field", "Form", "Hover Card", "Input Group",
    "Input OTP", "Item", "Kbd", "Menubar", "Navigation Menu", "Native Select",
    "Pagination", "Progress", "Resizable", "Scroll Area", "Sheet", "Sidebar",
    "Skeleton", "Slider", "Sonner", "Spinner", "Toggle", "Toggle Group",
  ]
  return (
    <div className="sticky top-0 z-40 -mx-10 mb-10 border-b bg-background/95 px-10 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap gap-x-4 gap-y-1">
        {sections.map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            {s}
          </a>
        ))}
      </div>
    </div>
  )
}

function Section({
  id,
  title,
  description,
  children,
  className,
}: {
  id: string
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className="scroll-mt-40 border-b pb-10">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}
      <div className={cn("mt-5 flex flex-wrap items-center gap-4", className)}>{children}</div>
    </section>
  )
}

// The full set of color tokens defined in the theme — every one of these
// has a real value in src/styles/showcase-theme.css (:root and .dark) and a
// --color-* mapping in src/index.css's @theme block, so bg-<name> below is
// always a real, working Tailwind utility, not a placeholder.
const colorGroups: { label: string; tokens: [string, string][] }[] = [
  {
    label: "Surfaces",
    tokens: [
      ["background", "bg-background border"],
      ["foreground", "bg-foreground border"],
      ["card", "bg-card border"],
      ["card-foreground", "bg-card-foreground border"],
      ["popover", "bg-popover border"],
      ["popover-foreground", "bg-popover-foreground border"],
    ],
  },
  {
    label: "Brand",
    tokens: [
      ["primary", "bg-primary border"],
      ["primary-foreground", "bg-primary-foreground border"],
      ["secondary", "bg-secondary border"],
      ["secondary-foreground", "bg-secondary-foreground border"],
      ["muted", "bg-muted border"],
      ["muted-foreground", "bg-muted-foreground border"],
      ["accent", "bg-accent border"],
      ["accent-foreground", "bg-accent-foreground border"],
    ],
  },
  {
    label: "Status",
    tokens: [
      ["destructive", "bg-destructive border"],
      ["destructive-foreground", "bg-destructive-foreground border"],
      ["caution", "bg-caution border"],
      ["caution-foreground", "bg-caution-foreground border"],
      ["success", "bg-success border"],
      ["success-foreground", "bg-success-foreground border"],
    ],
  },
  {
    label: "Form & Interaction",
    tokens: [
      ["border", "bg-border border"],
      ["input", "bg-input border"],
      ["ring", "bg-ring border"],
    ],
  },
  {
    label: "Chart",
    tokens: [
      ["chart-1", "bg-chart-1 border"],
      ["chart-2", "bg-chart-2 border"],
      ["chart-3", "bg-chart-3 border"],
      ["chart-4", "bg-chart-4 border"],
      ["chart-5", "bg-chart-5 border"],
    ],
  },
  {
    label: "Sidebar",
    tokens: [
      ["sidebar", "bg-sidebar border"],
      ["sidebar-foreground", "bg-sidebar-foreground border"],
      ["sidebar-primary", "bg-sidebar-primary border"],
      ["sidebar-primary-foreground", "bg-sidebar-primary-foreground border"],
      ["sidebar-accent", "bg-sidebar-accent border"],
      ["sidebar-accent-foreground", "bg-sidebar-accent-foreground border"],
      ["sidebar-border", "bg-sidebar-border border"],
      ["sidebar-ring", "bg-sidebar-ring border"],
    ],
  },
]

// Reads the swatch's own rendered background color and formats it as a hex
// string, rather than hardcoding hex values in code — most of these tokens
// are authored in OKLCH, so this stays accurate automatically if the theme
// changes, and it re-reads after every light/dark toggle.
//
// getComputedStyle() can return the color back in whatever color function it
// was declared with (e.g. "oklch(1 0 0)"), not always as rgb(...), so this
// can't be regex-parsed safely — a canvas 2D context resolves any valid CSS
// color string (oklch, rgb, hsl, named, ...) to concrete sRGB bytes, which
// is what we actually want to display.
let hexResolverCtx: CanvasRenderingContext2D | null = null
function resolveColorToHex(colorString: string) {
  if (!hexResolverCtx) {
    const canvas = document.createElement("canvas")
    canvas.width = 1
    canvas.height = 1
    hexResolverCtx = canvas.getContext("2d", { willReadFrequently: true })
  }
  const ctx = hexResolverCtx
  if (!ctx) return ""
  // The canvas is reused across every swatch for efficiency, so it must be
  // cleared first — otherwise a translucent color (e.g. a 10%-opacity
  // border) alpha-blends on top of whatever the previous swatch left in
  // that pixel instead of showing its own true value.
  ctx.clearRect(0, 0, 1, 1)
  ctx.fillStyle = colorString
  ctx.fillRect(0, 0, 1, 1)
  const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data
  const toHex = (c: number) => c.toString(16).padStart(2, "0")
  const hex = "#" + [r, g, b].map(toHex).join("")
  // Show an 8-digit hex (with alpha) for translucent tokens like border/
  // input in dark mode, rather than silently reporting them as opaque.
  return a < 255 ? hex + toHex(a) : hex
}

function ColorSwatch({
  name,
  cls,
  dark,
}: {
  name: string
  cls: string
  dark: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [hex, setHex] = useState("")

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (!ref.current) return
      setHex(resolveColorToHex(getComputedStyle(ref.current).backgroundColor))
    })
    return () => cancelAnimationFrame(id)
  }, [dark])

  return (
    <div className="flex flex-col gap-2">
      <div ref={ref} className={`h-14 rounded-md ${cls}`} />
      <span className="text-xs font-mono text-muted-foreground">{name}</span>
      <span className="text-[11px] font-mono text-muted-foreground/70">
        {hex || " "}
      </span>
    </div>
  )
}

export default function Showcase() {
  const [dark, setDark] = useState(false)
  // Dialog/Popover/Select/Sheet(Drawer)/DropdownMenu/etc. render their
  // content through a Radix (or vaul) Portal into document.body, outside
  // this component's own DOM subtree — so toggling a "dark" class only on
  // a wrapper div here never reaches them. Toggling it on <html> instead
  // puts it above the portal target too, so every themed token cascades
  // into portaled content as well.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    return () => {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])
  return (
    <div className={cn("min-h-screen bg-background text-foreground", dark && "dark")}>
      <div className="mx-auto max-w-5xl px-10 pt-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              shadcn/ui — Design System Showcase
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Radix base · new-york-v4 style · custom brand palette · MIT
              licensed. Every component below is real, interactive shadcn/ui
              — not a screenshot.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 pt-1">
            <Switch id="dark-mode-toggle" checked={dark} onCheckedChange={setDark} />
            <Label htmlFor="dark-mode-toggle">Dark mode</Label>
          </div>
        </div>
      </div>
      <Nav />
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-10 pb-24">
        <Section id="colors" title="Colors" description="Every color token defined in the theme — semantic tokens, chart ramp, and sidebar.">
          <div className="flex w-full flex-col gap-6">
            {colorGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {group.label}
                </h3>
                <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                  {group.tokens.map(([name, cls]) => (
                    <ColorSwatch key={name} name={name} cls={cls} dark={dark} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="typography" title="Typography">
          <div className="flex w-full flex-col gap-2">
            <h1 className="text-4xl font-bold tracking-tight">Heading 1</h1>
            <h2 className="text-2xl font-semibold tracking-tight">Heading 2</h2>
            <p className="text-base leading-7">Body text — the quick brown fox jumps over the lazy dog.</p>
            <p className="text-sm text-muted-foreground">Muted text for secondary content.</p>
          </div>
        </Section>

        <Section id="radius" title="Radius" description="Derived from a single --radius token.">
          <div className="h-12 w-12 border-2 border-foreground/80 rounded-sm" />
          <div className="h-12 w-12 border-2 border-foreground/80 rounded-md" />
          <div className="h-12 w-12 border-2 border-foreground/80 rounded-lg" />
          <div className="h-12 w-12 border-2 border-foreground/80 rounded-xl" />
          <div className="h-12 w-12 border-2 border-foreground/80 rounded-2xl" />
          <div className="h-12 w-12 border-2 border-foreground/80 rounded-3xl" />
          <div className="h-12 w-12 border-2 border-foreground/80 rounded-4xl" />
        </Section>

        <Section id="button" title="Button">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button
            variant="outline"
            className="border-[#df2225] hover:bg-destructive hover:text-white dark:border-[#df2225] dark:hover:bg-destructive dark:hover:text-white"
          >
            Outline Destructive
          </Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button size="icon" aria-label="Mail"><MailIcon /></Button>
          <Button disabled>Disabled</Button>
        </Section>

        <Section id="button-icon" title="Button - Icon">
          <Button><PlusIcon />Default</Button>
          <Button variant="secondary"><SettingsIcon />Secondary</Button>
          <Button variant="outline"><DownloadIcon />Outline</Button>
          <Button
            variant="outline"
            className="border-[#df2225] hover:bg-destructive hover:text-white dark:border-[#df2225] dark:hover:bg-destructive dark:hover:text-white"
          >
            <AlertTriangleIcon />
            Outline Destructive
          </Button>
          <Button variant="ghost"><SearchIcon />Ghost</Button>
          <Button variant="destructive"><Trash2Icon />Destructive</Button>
          <Button variant="link"><ExternalLinkIcon />Link</Button>
          <Button disabled><BanIcon />Disabled</Button>
        </Section>

        <Section id="input" title="Input">
          <div className="flex w-full max-w-sm flex-col gap-2">
            <Label htmlFor="sc-email">Email</Label>
            <Input id="sc-email" type="email" placeholder="you@example.com" />
          </div>
        </Section>

        <Section id="textarea" title="Textarea">
          <Textarea placeholder="Type your message here." className="max-w-sm" />
        </Section>

        <Section id="select" title="Select">
          <Select defaultValue="apple">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
            </SelectContent>
          </Select>
        </Section>

        <Section id="checkbox" title="Checkbox">
          <div className="flex items-center gap-2">
            <Checkbox id="sc-c1" defaultChecked />
            <Label htmlFor="sc-c1">Accept terms</Label>
          </div>
        </Section>

        <Section id="radio-group" title="Radio Group">
          <RadioGroup defaultValue="comfortable" className="flex gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="default" id="sc-r1" />
              <Label htmlFor="sc-r1">Default</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="comfortable" id="sc-r2" />
              <Label htmlFor="sc-r2">Comfortable</Label>
            </div>
          </RadioGroup>
        </Section>

        <Section id="switch" title="Switch">
          <div className="flex items-center gap-2">
            <Switch id="sc-s1" defaultChecked />
            <Label htmlFor="sc-s1">Enabled</Label>
          </div>
        </Section>

        <Section id="label" title="Label">
          <div className="flex items-center gap-2">
            <Checkbox id="sc-terms" />
            <Label htmlFor="sc-terms">Accept terms and conditions</Label>
          </div>
        </Section>

        <Section
          id="card"
          title="Card"
          description="The spacing control above applies to every card in this section."
        >
          <CardSpacingDemo />
        </Section>

        <Section id="dialog" title="Dialog" description="Click to open.">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[420px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-1.5">
                <Label htmlFor="sc-name">Name</Label>
                <Input id="sc-name" defaultValue="Peter" />
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Section>

        <Section id="dropdown-menu" title="Dropdown Menu" description="Click to open.">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Section>

        <Section id="popover" title="Popover" description="Click to open.">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-72">
              <div className="space-y-1">
                <h4 className="leading-none font-medium">Dimensions</h4>
                <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
              </div>
            </PopoverContent>
          </Popover>
        </Section>

        <Section id="tabs" title="Tabs">
          <Tabs defaultValue="account" className="w-[380px]">
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
        </Section>

        <Section id="badge" title="Badge">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </Section>

        <Section id="avatar" title="Avatar">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Section>

        <Section id="tooltip" title="Tooltip" description="Hover to preview.">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent><p>Add to library</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Section>

        <Section id="alert" title="Alert">
          <div className="flex w-full flex-col gap-3">
            <Alert>
              <CheckCircle2Icon />
              <AlertTitle>Success! Your changes have been saved.</AlertTitle>
              <AlertDescription>This is an alert with an icon and description.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Unable to process your payment.</AlertTitle>
              <AlertDescription>Please verify your billing information.</AlertDescription>
            </Alert>
            <Alert className="max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
              <AlertTriangleIcon />
              <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
              <AlertDescription>
                Renew now to avoid service interruption or upgrade to a paid plan to
                continue using the service.
              </AlertDescription>
            </Alert>
            <Alert variant="caution">
              <AlertTriangleIcon />
              <AlertTitle>Your API usage is approaching its limit.</AlertTitle>
              <AlertDescription>
                Using the caution token — bg-card with text-caution, the same
                pattern the destructive variant uses.
              </AlertDescription>
            </Alert>
            <Alert variant="success">
              <CheckCircle2Icon />
              <AlertTitle>Deployment completed successfully.</AlertTitle>
              <AlertDescription>
                Using the success token — bg-card with text-success, the same
                pattern the destructive variant uses.
              </AlertDescription>
            </Alert>
          </div>
        </Section>

        <Section id="table" title="Table">
          <Table>
            <TableCaption>A list of recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Section>

        <Section id="separator" title="Separator">
          <div className="w-full max-w-sm">
            <div className="text-sm">
              <div className="font-medium">shadcn/ui</div>
              <div className="text-muted-foreground">An accessible component library.</div>
            </div>
            <Separator className="my-2" />
            <div className="flex h-5 items-center gap-4 text-sm">
              <span>Blog</span>
              <Separator orientation="vertical" />
              <span>Docs</span>
            </div>
          </div>
        </Section>

        <Section id="accordion" title="Accordion">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes. It comes with default styles.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        <Section id="alert-dialog" title="Alert Dialog" description="Click to open.">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Delete account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="sm:max-w-[420px]">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Section>

        <Section id="aspect-ratio" title="Aspect Ratio">
          <AspectRatio ratio={16 / 9} className="flex w-full max-w-md items-center justify-center rounded-md bg-gradient-to-br from-muted to-accent">
            <span className="text-sm text-muted-foreground">16 / 9</span>
          </AspectRatio>
        </Section>

        <Section
          id="attachment"
          title="Attachment"
          description="Vertical attachments with a remove action and a click-to-open trigger."
        >
          <AttachmentImage />
        </Section>

        <Section id="breadcrumb" title="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Section>

        <Section id="button-group" title="Button Group">
          <ButtonGroup>
            <Button variant="outline">Left</Button>
            <Button variant="outline">Center</Button>
            <Button variant="outline">Right</Button>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonGroupText>https://</ButtonGroupText>
            <Button variant="outline">example.com</Button>
          </ButtonGroup>
        </Section>

        <Section id="calendar" title="Calendar">
          <Calendar mode="single" defaultMonth={new Date(2026, 6, 1)} selected={new Date(2026, 6, 21)} className="rounded-md border" />
        </Section>

        <Section id="carousel" title="Carousel">
          <div className="flex w-full flex-wrap items-start gap-10">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, i) => (
                  <CarouselItem key={i}>
                    <div className="flex aspect-square items-center justify-center rounded-md border bg-muted">
                      <span className="text-3xl font-semibold">{i + 1}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <CarouselSize />
          </div>
        </Section>

        <Section id="chart" title="Chart">
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full max-w-lg">
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            </BarChart>
          </ChartContainer>
        </Section>

        <Section
          id="chart-interactive"
          title="Chart Interactive"
          description="Area and donut charts using the theme's chart-1 through chart-5 tokens."
        >
          <div className="flex w-full flex-wrap items-start gap-6">
            <ChartAreaInteractive />
            <ChartPieDonutText />
            <ChartBarInteractive />
            <ChartAreaGradient />
          </div>
        </Section>

        <Section id="collapsible" title="Collapsible">
          <Collapsible defaultOpen className="w-full max-w-sm space-y-2">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-sm font-semibold">3 people starred this repository</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDownIcon />
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
            </CollapsibleContent>
          </Collapsible>
        </Section>

        <Section
          id="combobox"
          title="Combobox"
          description="Base UI Combobox with auto-highlight — type to filter."
        >
          <ComboboxAutoHighlight />
        </Section>

        <Section id="command" title="Command">
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

        <Section id="context-menu" title="Context Menu" description="Right-click the box.">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[100px] w-[260px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuItem>Back<ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
              <ContextMenuItem>Forward<ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Reload</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Section>

        <Section id="drawer" title="Drawer" description="Click to open.">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Move goal</DrawerTitle>
                  <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </Section>

        <Section id="empty" title="Empty">
          <Empty className="w-full max-w-md border border-dashed">
            <EmptyHeader>
              <EmptyMedia variant="icon"><InboxIcon /></EmptyMedia>
              <EmptyTitle>No messages yet</EmptyTitle>
              <EmptyDescription>When you receive a message, it will show up here.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm">Compose message</Button>
            </EmptyContent>
          </Empty>
        </Section>

        <Section id="field" title="Field">
          <FieldSet className="w-full max-w-sm">
            <FieldLegend>Profile</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="sc-fd-name">Name</FieldLabel>
                <Input id="sc-fd-name" placeholder="Peter" />
                <FieldDescription>Your full display name.</FieldDescription>
              </Field>
              <FieldSeparator />
              <Field orientation="horizontal">
                <Checkbox id="sc-fd-newsletter" />
                <FieldContent>
                  <FieldLabel htmlFor="sc-fd-newsletter">Subscribe to newsletter</FieldLabel>
                  <FieldDescription>Get occasional product updates.</FieldDescription>
                </FieldContent>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldChoiceCard />
        </Section>

        <Section id="form" title="Form">
          <FormExample />
        </Section>

        <Section id="hover-card" title="Hover Card" description="Hover to open.">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@shadcn</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@shadcn</h4>
                  <p className="text-sm text-muted-foreground">Building shadcn/ui.</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Section>

        <Section id="input-group" title="Input Group">
          <InputGroup className="max-w-xs">
            <InputGroupAddon><SearchIcon /></InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
          <InputGroup className="max-w-xs">
            <InputGroupAddon><MailIcon /></InputGroupAddon>
            <InputGroupInput placeholder="you@example.com" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="sm">Send</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Section>

        <Section id="input-otp" title="Input OTP">
          <InputOTP maxLength={6} defaultValue="123">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Section>

        <Section id="item" title="Item">
          <ItemGroup className="w-full max-w-md gap-1">
            <Item variant="outline">
              <ItemMedia variant="icon"><UserIcon /></ItemMedia>
              <ItemContent>
                <ItemTitle>Account</ItemTitle>
                <ItemDescription>Manage your profile and preferences.</ItemDescription>
              </ItemContent>
              <ItemActions><Button variant="ghost" size="sm">Edit</Button></ItemActions>
            </Item>
            <ItemSeparator />
            <Item variant="outline">
              <ItemMedia variant="icon"><BellIcon /></ItemMedia>
              <ItemContent>
                <ItemTitle>Notifications</ItemTitle>
                <ItemDescription>Configure how you're notified.</ItemDescription>
              </ItemContent>
              <ItemActions><Button variant="ghost" size="sm">Edit</Button></ItemActions>
            </Item>
          </ItemGroup>
        </Section>

        <Section id="kbd" title="Kbd">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>Shift</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
        </Section>

        <Section id="menubar" title="Menubar">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New Tab<MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo<MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Section>

        <Section id="navigation-menu" title="Navigation Menu">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[260px] gap-2 p-2">
                    <li><NavigationMenuLink href="#">Introduction</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="#">Installation</NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Section>

        <Section id="native-select" title="Native Select">
          <NativeSelect defaultValue="apple">
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
          </NativeSelect>
        </Section>

        <Section id="pagination" title="Pagination">
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        </Section>

        <Section id="progress" title="Progress">
          <Progress value={66} className="w-full max-w-sm" />
        </Section>

        <Section id="resizable" title="Resizable">
          <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg border">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[140px] items-center justify-center p-6"><span className="font-semibold">One</span></div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[140px] items-center justify-center p-6"><span className="font-semibold">Two</span></div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Section>

        <Section id="scroll-area" title="Scroll Area">
          <ScrollArea className="h-48 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium">Tags</h4>
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i}>
                  <div className="text-sm py-1">Tag {i + 1}</div>
                  <Separator className="my-1" />
                </div>
              ))}
            </div>
          </ScrollArea>
          <ScrollAreaHorizontalDemo />
        </Section>

        <Section id="sheet" title="Sheet" description="Click to open.">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>Make changes to your profile here.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </Section>

        <Section
          id="sidebar"
          title="Sidebar"
          description="Team switcher, collapsible nav groups, projects, and a user menu — the full sidebar-07 block."
          className="items-start"
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-lg border">
            <SidebarProvider className="min-h-[560px]" style={{ "--sidebar-width": "16rem" } as React.CSSProperties}>
              <AppSidebar className="absolute h-full border-r" />
              <SidebarInset>
                <div className="flex items-center gap-2 border-b p-3">
                  <SidebarTrigger />
                  <span className="text-sm text-muted-foreground">Page content</span>
                </div>
              </SidebarInset>
            </SidebarProvider>
          </div>
        </Section>

        <Section id="skeleton" title="Skeleton">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[160px]" />
              <Skeleton className="h-4 w-[120px]" />
            </div>
          </div>
        </Section>

        <Section id="slider" title="Slider">
          <Slider defaultValue={[50]} max={100} step={1} className="w-full max-w-sm" />
        </Section>

        <Section
          id="sonner"
          title="Sonner"
          description="Toast notifications — pick a corner to trigger one."
        >
          <SonnerPosition />
        </Section>

        <Section id="spinner" title="Spinner">
          <Spinner className="size-4" />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </Section>

        <Section id="toggle" title="Toggle">
          <Toggle aria-label="Toggle bold"><BoldIcon /></Toggle>
          <Toggle aria-label="Toggle italic" defaultPressed><ItalicIcon /></Toggle>
        </Section>

        <Section id="toggle-group" title="Toggle Group">
          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon /></ToggleGroupItem>
          </ToggleGroup>
        </Section>
      </div>
      <Toaster theme={dark ? "dark" : "light"} />
    </div>
  )
}
