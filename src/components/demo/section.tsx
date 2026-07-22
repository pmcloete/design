import * as React from "react"
import { cn } from "@/lib/utils"

export function Page({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground p-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 border-b pb-4">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="flex flex-col gap-10">{children}</div>
      </div>
    </div>
  )
}

export function Section({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      <div className={cn("flex flex-wrap items-center gap-4", className)}>
        {children}
      </div>
    </section>
  )
}
