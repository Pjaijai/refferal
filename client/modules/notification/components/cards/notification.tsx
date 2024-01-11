import React, { useMemo } from "react"
import Link from "next/link"
import { formatDate } from "@/utils/common/helpers/format/date"
import compareDateDifferenceHelper from "@/utils/common/helpers/time/compareDateDifference"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import MessageIcon from "@/components/customized-ui/icons/message"

interface INotificationCardProps {
  createdAt: string //datetime string with timezone
  isSeen: boolean
  body: string
}
const NotificationCard: React.FunctionComponent<INotificationCardProps> = ({
  body,
  createdAt,
  isSeen,
}) => {
  const formattedCreatedAt = useMemo(() => {
    const dayDiff = compareDateDifferenceHelper({
      oldDate: createdAt,
      newDate: new Date().toISOString(),
      unit: "day",
    })

    if (dayDiff > 7 && dayDiff <= 364) return `${Math.ceil(dayDiff / 7)}w`

    if (dayDiff > 0 && dayDiff <= 7) return `${dayDiff}d`

    const minuteDiff = compareDateDifferenceHelper({
      oldDate: createdAt,
      newDate: new Date().toISOString(),
      unit: "minute",
    })

    if (minuteDiff > 720 && minuteDiff <= 1440)
      return formatDate(createdAt, "HH:MM")
    if (minuteDiff > 60 && minuteDiff <= 720)
      return `${Math.ceil(minuteDiff / 60)}h`
    if (minuteDiff > 0 && minuteDiff <= 60) return `${minuteDiff}m`

    return formatDate("DD/MM/YY")
  }, [createdAt])

  return (
    <Link
      href={siteConfig.page.chat.href}
      className="flex flex-row items-start justify-between border-t border-muted px-2 py-6"
    >
      <div
        className={cn(
          "flex max-w-md flex-row items-start gap-3",
          isSeen && "text-muted-foreground"
        )}
      >
        <MessageIcon showDot={!isSeen} />
        <p>{body}</p>
      </div>

      <p className="text-sm text-muted-foreground">{formattedCreatedAt}</p>
    </Link>
  )
}

export default NotificationCard
