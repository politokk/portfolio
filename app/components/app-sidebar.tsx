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
import type { NavItemData } from "@/lib/load-meta-navigation";

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

// Icon mapping from string to component
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'home': Icons.home,
  'Globe': Icons.globe,
  'AppWindow': Icons.webcam,
  'FileText': Icons.fileText,
  // Add more mappings as needed
}

function getIconComponent(iconName: string): React.ComponentType<{ className?: string }> {
  return iconMap[iconName] || Icons.fileText
}

interface AppSidebarProps {
  isCollapsed: boolean
  activeNav?: string
  onNavClick?: (navId: string) => void
  navigation: NavItemData[]
}

export function AppSidebar({ isCollapsed, activeNav = "home", onNavClick, navigation }: AppSidebarProps) {
  const mainNavItems = navigation.map(item => ({
    id: item.id,
    name: item.name,
    label: item.label,
    icon: getIconComponent(item.icon),
    url: item.url,
  }))

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
