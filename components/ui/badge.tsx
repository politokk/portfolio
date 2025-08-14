import * as React from "react"

import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-sm px-2 py-0 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default:
          "border-transparent bg-indigo-50 text-indigo-500 border-indigo-200 [a&]:hover:bg-indigo-500/90 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-500/40 dark:bg-indigo-500/60 [&>svg]:text-indigo-500",
        destructive:
          "border-transparent bg-red-50 text-red-500 border-red-200 [a&]:hover:bg-red-500/90 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40 dark:bg-red-500/60",
        completed:
          "border-transparent bg-emerald-50 text-emerald-500 border-emerald-200 [a&]:hover:bg-emerald-500/90 focus-visible:ring-emerald-500/20 dark:focus-visible:ring-emerald-500/40 dark:bg-emerald-500/60",
        info:
          "border-transparent bg-amber-50 text-amber-500 border-amber-200 [a&]:hover:bg-amber-500/90 focus-visible:ring-amber-500/20 dark:focus-visible:ring-amber-500/40 dark:bg-amber-500/60",
        aiCapability:
          "border-transparent bg-lime-50 text-lime-500 border-lime-200 [a&]:hover:bg-lime-500/90 focus-visible:ring-lime-500/20 dark:focus-visible:ring-lime-500/40 dark:bg-lime-500/60",
        apiIntegration:
          "border-transparent bg-purple-50 text-purple-500 border-purple-200 [a&]:hover:bg-purple-500/90 focus-visible:ring-purple-500/20 dark:focus-visible:ring-purple-500/40 dark:bg-purple-500/60",
        comment:
          "border-transparent bg-sky-50 text-sky-500 border-sky-200 [a&]:hover:bg-sky-500/90 focus-visible:ring-sky-500/20 dark:focus-visible:ring-sky-500/40 dark:bg-sky-500/60",
        home:
          "border-transparent bg-indigo-50 text-indigo-500 border-indigo-200 border-indigo-200 border-1 [a&]:hover:bg-indigo-500/90 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-500/40 dark:bg-indigo-500/60",
        website:
          "border-transparent bg-emerald-50 text-emerald-700 border-emerald-200 border-emerald-200 border-1 [a&]:hover:bg-emerald-500/90 focus-visible:ring-emerald-500/20 dark:focus-visible:ring-emerald-500/40 dark:bg-emerald-500/60 [&>svg]:text-emerald-500",
        plugins:
          "border-transparent bg-blue-50 text-blue-500 border-blue-200 border-blue-200 border-1 [a&]:hover:bg-blue-500/90 focus-visible:ring-blue-500/20 dark:focus-visible:ring-blue-500/40 dark:bg-blue-500/60",
        skills:
          "border-transparent bg-pink-50 text-pink-500 border-pink-200 border-pink-200 border-1 [a&]:hover:bg-pink-500/90 focus-visible:ring-pink-500/20 dark:focus-visible:ring-pink-500/40 dark:bg-pink-500/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground border",
        secondary:
          "border-transparent bg-muted text-secondary-foreground[a&]:hover:bg-secondary/90",
        junk:
          "border-transparent bg-red-50 text-red-500 border-red-200 [a&]:hover:bg-red-500/90 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40 dark:bg-red-500/60",
        trash:
          "border-transparent bg-orange-50 text-orange-500 border-orange-200 [a&]:hover:bg-orange-500/90 focus-visible:ring-orange-500/20 dark:focus-visible:ring-orange-500/40 dark:bg-orange-500/60",
        archive:
          "border-transparent bg-violet-50 text-violet-500 border-violet-200 [a&]:hover:bg-violet-500/90 focus-visible:ring-violet-500/20 dark:focus-visible:ring-violet-500/40 dark:bg-violet-500/60",
        social:
          "border-transparent bg-fuchsia-50 text-fuchsia-500 border-fuchsia-200 [a&]:hover:bg-fuchsia-500/90 focus-visible:ring-fuchsia-500/20 dark:focus-visible:ring-fuchsia-500/40 dark:bg-fuchsia-500/60",
        updates:
          "border-transparent bg-green-50 text-green-500 border-green-200 [a&]:hover:bg-green-500/90 focus-visible:ring-green-500/20 dark:focus-visible:ring-green-500/40 dark:bg-green-500/60",
        forums:
          "border-transparent bg-rose-50 text-rose-500 border-rose-200 [a&]:hover:bg-rose-500/90 focus-visible:ring-rose-500/20 dark:focus-visible:ring-rose-500/40 dark:bg-rose-500/60",
        shopping:
          "border-transparent bg-blue-50 text-blue-500 border-blue-200 [a&]:hover:bg-blue-500/90 focus-visible:ring-blue-500/20 dark:focus-visible:ring-blue-500/40 dark:bg-blue-500/60",
        promotions:
          "border-transparent bg-indigo-50 text-indigo-500 border-indigo-200 [a&]:hover:bg-indigo-500/90 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-500/40 dark:bg-indigo-500/60",
      },
    },
  }
)

function Badge({
  asChild = false,
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      className={cn(badgeVariants({ variant }), className)}
      data-slot="badge"
      {...props}
    />
  )
}

export { Badge, badgeVariants }
