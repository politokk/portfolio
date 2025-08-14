"use client"

import * as React from "react"

import { cn } from '@/lib/utils';
import { Input } from "@/components/ui/input"
import {
  ResizableHandle,  
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/components/app-sidebar"
import { MailDisplay } from "@/app/components/mail-display"
import { MailList } from "@/app/components/mail-list"
import type { Mail } from "@/app/data"
import { useMail } from "@/app/use-mail"
import { Icons } from "@/components/ui/icons"

interface MailProps {
  accounts: {
    label: string
    email: string 
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
  initialCategory?: string
}

export function MailComponent ({
  accounts,
  mails,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize,
  initialCategory = "home",
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [activeNav, setActiveNav] = React.useState(initialCategory)
  const [mail] = useMail()
  
  // Icon mapping for navigation items
  const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "home": Icons.home,
    "websites": Icons.browser,
    "plugins": Icons.plug,
    "skills": Icons.brain,
  }

  // Display name mapping for navigation items
  const navDisplayNames: Record<string, string> = {
    "home": "Home",
    "websites": "Websites",
    "plugins": "Plugins",
    "skills": "Skills & Platforms",
  }

  // Filter mails based on selected navigation
  const filteredMails = React.useMemo(() => {
    switch(activeNav) {
      case "home":
        return mails
      case "websites":
        return mails.filter(m => !m.read)
      case "plugins":
        // For demo, show mails from certain senders
        return mails.filter(m => m.email.includes("smith") || m.email.includes("wilson"))
      case "skills":
        return mails.filter(m => m.subject.toLowerCase().includes("announcement") || m.subject.toLowerCase().includes("promotion"))
      default:
        return mails
    }
  }, [activeNav, mails])

  return (
    <SidebarProvider defaultOpen={!defaultCollapsed}>
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
              sizes
            )}`
          }}
          className="h-full max-h-[800px] items-stretch"
        >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={12}
          maxSize={30}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`
          }}
          onResize={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`
          }}
          className={cn(
            isCollapsed &&
              "max-w-[3rem] items-center flex flex-col transition-all duration-300 ease-in-out"
          )}
        >
          <AppSidebar 
            isCollapsed={isCollapsed}
            activeNav={activeNav}
            onNavClick={setActiveNav}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-0 mt-2">
              <h1 className="text-xl font-semibold text-subtle-foreground/85 flex items-center gap-2">
                {navIcons[activeNav] && React.createElement(navIcons[activeNav], { className: "h-5 w-5  stroke-2.5 text-subtle-foreground/85" })}
                {navDisplayNames[activeNav] || activeNav}
              </h1>
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                >
                  All mail
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <Icons.search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all" className="m-0">
              <MailList items={filteredMails} />
            </TabsContent>
            <TabsContent value="unread" className="m-0">
              <MailList items={filteredMails.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
          <MailDisplay
            mail={filteredMails.find((item) => item.id === mail.selected) || null}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
    </SidebarProvider>
  )
}
