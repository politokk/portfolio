"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  Home,
  Inbox,
  Search,
  Sparkles,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
    SidebarFooter
} from "@/components/ui/sidebar"
import { NavUser } from "@/components/nav-user"

import { Icons } from "@/components/ui/icons"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
      label: "12",
    },
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
      label: "8",
    },
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
      label: "10",
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      badge: "10",
      label: "10",
    },
  ],

  workspaces: [
    {
      name: "Websites",
      label: "12",
      icon: Icons.browser,
      pages: [
        {
          name: "Stashd",
          url: "stashd",
          icon: Icons.stash,
          subPages: [
            {
              name: "Short-term Goals",
              url: "#",
              icon: Icons.calendar,
            },
            {
              name: "Long-term Vision",
              url: "#",
              icon: Icons.star07,
            },
          ],
        },
        {
          name: "GPTeam",
          url: "gptteam",
          icon: Icons.command,
          label: "10",
          subPages: [
            {
              name: "Digital Artwork",
              url: "#",
              icon: Icons.monitor02,
            },
            {
              name: "Traditional Media",
              url: "#",
              icon: Icons.paintbrush,
            },
          ],
        },
        {
          name: "Ohara's Pub",
          url: "#",
          icon: Icons.chefHat,
        },
      ],
    },
    
       
    {
      name: "Plugins",
      label: "8",
      icon: Icons.plug,
      pages: [
        {
          name: "Amazon Finder",
          url: "amazon",
          icon: Icons.shoppingCart,
          label: "10",
          subPages: [
            {
              name: "Monthly Budget",
              url: "#",
              icon: Icons.calendar,
            },
            {
              name: "Expense Categories",
              url: "#",
              icon: Icons.barChart01,
            },
            {
              name: "Savings Goals",
              url: "#",
              icon: Icons.target01,
            },
          ],
        },
        {
          name: "GPT Finder",
          url: "gpt",
          icon: Icons.searchCode,
          label: "10",
            },
        {
          name: "Ebay Finds",
          url: "ebay",
          icon: Icons.coinsHand,
          label: "10",
          subPages: [
            {
              name: "Family Events",
              url: "#",
              icon: Icons.heart,
            },
            {
              name: "Appointments",
              url: "#",
              icon: Icons.clock,
            },
          ],
        },
        {
          name: "Design Tee",
          url: "designtee",
          icon: Icons.shirt,
          label: "10",
          
        },
        {
          name: "AI Image",
          url: "aiimage",
          icon: Icons.image,
          label: "10",
          
        },
        {
          name: "Prompty",
          url: "prompty",
          icon: Icons.prompt,
          label: "10",
          
        },
        {
          name: "Dupes",
          url: "dupes",
          icon: Icons.dupe,
          label: "10",
        },
        {
          name: "InstaShoe",
          url: "instashoe",
          icon: Icons.shoe,
          label: "10",
        },
      ],
    },
   
  ],
}

export function SidebarLeft({
  isCollapsed,
  ...props
}: React.ComponentProps<typeof Sidebar> & { isCollapsed: boolean }) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavWorkspaces workspaces={data.workspaces} />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
     <NavUser user={data.user} isCollapsed={isCollapsed} />
   </SidebarFooter>
    </Sidebar>
  )
}
