import { cookies } from "next/headers"
import { notFound } from "next/navigation"

import { MailComponent } from "@/app/components/mail"
import { accounts, mails } from "@/app/data"

// Define valid categories
const validCategories = [
  "websites",
  "plugins",
  "skills",
  "ai"
]

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const { category } = await params
  
  // Check if the category is valid
  if (!validCategories.includes(category)) {
    notFound()
  }

  const layout = (await cookies()).get("react-resizable-panels:layout:mail")
  const collapsed = (await cookies()).get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  // The category from the URL is already the correct id to use
  const categoryId = category

  return (
    <>
      <div className="md:hidden">
        <MailComponent
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
          initialCategory={categoryId}
        />
      </div>
      <div className="hidden flex-col h-screen md:flex">
        <MailComponent
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
          initialCategory={categoryId}
        />
      </div>
    </>
  )
}
