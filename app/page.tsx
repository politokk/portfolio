import { cookies } from "next/headers"

import { MailComponent } from "@/app/components/mail"
import { accounts, mails } from "@/app/data"
import { loadMetaNavigation } from "@/lib/load-meta-navigation"

export default async function MailPage() {
  const layout = (await cookies()).get("react-resizable-panels:layout:mail")
  const collapsed = (await cookies()).get("react-resizable-panels:collapsed")
  
  // Load navigation from meta.json files
  const navigation = await loadMetaNavigation()

  let defaultLayout = undefined
  let defaultCollapsed = undefined

  // Safely parse layout cookie
  if (layout?.value) {
    try {
      defaultLayout = JSON.parse(layout.value)
    } catch (error) {
      console.warn("Failed to parse layout cookie:", error)
      defaultLayout = undefined
    }
  }

  // Safely parse collapsed cookie
  if (collapsed?.value) {
    try {
      defaultCollapsed = JSON.parse(collapsed.value)
    } catch (error) {
      console.warn("Failed to parse collapsed cookie:", error)
      defaultCollapsed = undefined
    }
  }

  return (
    <>
      <div className="md:hidden">
        <MailComponent
          accounts={accounts}
          mails={mails}
          navigation={navigation}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
      <div className="hidden flex-col h-screen md:flex">
        <MailComponent
          accounts={accounts}
          mails={mails}
          navigation={navigation}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
