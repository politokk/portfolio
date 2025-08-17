import type { ComponentProps } from "react"
import { formatDistanceToNow } from "date-fns"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Mail } from "@/app/data"
import { useMail } from "@/app/use-mail"

interface MailListProps {
  items: Mail[]
  columns?: 1 | 2
}

export function MailList({ items, columns = 1 }: MailListProps) {
  const [mail, setMail] = useMail()

  return (
    <ScrollArea className="h-screen">
      <div className={cn(
        "gap-2 p-4 pt-0",
        columns === 1 ? "flex flex-col" : "grid grid-cols-2"
      )}>
        {items.map((item) => (
          <button
            type="button"
            key={item.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              mail.selected === item.id && "bg-muted"
            )}
            onClick={() =>
              setMail({
                ...mail,
                selected: item.id,
              })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.name}</div>
                  {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    mail.selected === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.text.substring(0, 300)}
            </div>
            {item.labels.length ? (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null}
          </button>
        ))}
      </div>
    </ScrollArea>
  )
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["websites"].includes(label.toLowerCase())) {
    return "default"
  }

  if (["plugins"].includes(label.toLowerCase())) {
    return "outline"
  }

  if (["skills"].includes(label.toLowerCase())) {
    return "skills"
  }

  if (["ai"].includes(label.toLowerCase())) {
    return "ai"
  }

  return "default"
}