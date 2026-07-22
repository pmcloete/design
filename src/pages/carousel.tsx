import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel"
import { Page, Section } from "@/components/demo/section"

export default function CarouselDemo() {
  return (
    <Page title="Carousel" description="A carousel with motion and swipe built using Embla.">
      <Section title="Default" className="w-full">
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
      </Section>
    </Page>
  )
}
