"use client"

import * as React from "react"

import { Icons } from "@/components/ui/icons";
import { cn } from '@/lib/utils';
import { Separator } from "@/components/ui/separator"
import { AccountSwitcher } from "@/app/components/account-switcher"
import { Nav } from "@/app/components/nav"
import { NavUser } from "@/components/nav-user"
import { SidebarFooter } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { tabs } from "@/app/data";

export interface NavItem {
  id?: string
  name: string
  label?: string
    icon: React.ComponentType<{ className?: string }>
  variant: "default" | "ghost"
  url?: string
  onClick?: () => void
} 

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
}

interface AppSidebarProps {
  isCollapsed: boolean
  activeNav?: string
  onNavClick?: (navId: string) => void
}

export function AppSidebar({ isCollapsed, activeNav = "home", onNavClick }: AppSidebarProps) {
  const mainNavItems = [
    {
      id: "home",
      name: "Home",
      label: "",
      icon: Icons.home,
      url: "/",
    },
    ...tabs
  ]

  return (
    <>
      <div
        className={cn(
          "flex h-[52px] items-center justify-center",
          isCollapsed ? "h-[52px]" : "p-0"
        )}
      >
        <AccountSwitcher isCollapsed={isCollapsed} />
      </div>
      <Separator />
      <ScrollArea className="h-[calc(100vh-115px)]">
      <Nav
      className="h-full"
        isCollapsed={isCollapsed}
        links={mainNavItems.map(item => ({
          ...item,
          variant: activeNav === item.id ? "default" : "ghost",
          onClick: () => onNavClick?.(item.id)
        }))}
      />     
      </ScrollArea>
      <SidebarFooter className="mt-auto border-t">
      <NavUser user={data.user} isCollapsed={isCollapsed} />
    </SidebarFooter>
    </>
  )
}
