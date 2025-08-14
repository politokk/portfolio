"use client"

import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import type { ComponentProps } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

function getBadgeVariantFromId(
  id: string
): ComponentProps<typeof Badge>["variant"] {
  const idLower = id.toLowerCase()
  
  if (idLower === "home") return "home"
  if (idLower === "websites") return "website"
  if (idLower === "plugins") return "plugins"
  if (idLower === "skills") return "skills"
  
  return "default"
}
interface NavProps {
  isCollapsed: boolean
  className?: string
  links: {
    id?: string
    name: string
    label?: string
    icon: React.ComponentType<{ className?: string }>
    variant: "default" | "ghost"
    onClick?: () => void
    url?: string
  }[]
}

export function Nav({ links, isCollapsed }: NavProps) {
  const router = useRouter()

  const handleClick = (link: NavProps["links"][0]) => {
    if (link.url) {
      router.push(link.url)
    } else if (link.onClick) {
      link.onClick()
    }
  }

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4"
    >
      <SidebarMenu className="px-2 py-1  group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:p-2">
      {!isCollapsed && <SidebarGroupLabel>AI</SidebarGroupLabel>}
        {links.map((link) =>
          isCollapsed ? (
            <SidebarMenuItem key={link.name} className="px-1">
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button
                    variant={link.variant === "default" ? "secondary" : "ghost"}
                    onClick={() => handleClick(link)}
                    size="iconSm"
                    className="justify-center"
                  >
                    <link.icon />
                    <span className="sr-only">{link.name}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {link.name}
                  {link.label && (
                    <Badge variant={getBadgeVariantFromId(link.id || link.name)} className={`ml-auto transition-opacity duration-200 ${
                      link.variant === "default" ? "opacity-100" : "opacity-0"
                    }`}>
                      {link.label}  
                    </Badge>
                  )}
                </TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
          ) : (
            <SidebarMenuItem key={link.name} className="px-1">
              <SidebarMenuButton
                onClick={() => handleClick(link)}
                isActive={link.variant === "default"}
                size="sm"
                className="justify-start gap-2 [&:hover_.badge]:opacity-100"
              >
                <link.icon />
                {link.name}
                {link.label && (
                  <Badge variant={getBadgeVariantFromId(link.id || link.name)} className={`badge ml-auto transition-opacity duration-200 ${
                    link.variant === "default" ? "opacity-100" : "opacity-0"
                  }`}>
                    {link.label}
                  </Badge>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </div>
  )
}
