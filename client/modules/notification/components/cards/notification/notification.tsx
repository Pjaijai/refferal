import React, { useState } from "react"
import { useRouter } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import useCreatedAt from "@/hooks/common/created-at"
import MessageIconWithDot from "@/components/customized-ui/icons/message-with-dot"

interface IMessageCardProps {
  senderUsername: string
  createdAt: string
  isSeen: boolean
  conversationUuid: string
  messageId: number
  addUnseenMessage: (messageId: number, conversationUuid: string) => void
}

const NotificationCard: React.FC<IMessageCardProps> = ({
  senderUsername,
  createdAt,
  isSeen,
  conversationUuid,
  messageId,
  addUnseenMessage,
}) => {
  const { data: date } = useCreatedAt({ createdAt })
  const [tempIsSeen, setTempIsSeen] = useState(isSeen)
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    router.push(`${siteConfig.page.chat.href}?conversation=${conversationUuid}`)
    if (isSeen) return
    setTempIsSeen(true)
    addUnseenMessage(messageId, conversationUuid)
  }

  const handleMouseEnter = () => {
    if (isSeen) return
    setIsHovered(true)
    setTempIsSeen(true)
  }

  const handleMouseLeave = () => {
    if (isSeen) return
    setIsHovered(false)
    addUnseenMessage(messageId, conversationUuid)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className="flex w-full cursor-pointer items-center border-y px-3 py-4 hover:bg-slate-100 focus:outline-none"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Icon Section */}
      <div className="mr-3 shrink-0">
        <MessageIconWithDot showDot={!tempIsSeen} variant="outlined" />
      </div>

      {/* Content Section */}
      <div
        className={cn(
          "grow break-words px-1 text-sm",
          tempIsSeen ? "text-slate-500" : "text-black"
        )}
      >
        You have a new message from {senderUsername}
      </div>

      {/* Date Section */}
      <div
        className={cn(
          "shrink-0 text-xs",
          tempIsSeen ? "text-slate-500" : "text-gray-500"
        )}
      >
        {date}
      </div>
    </div>
  )
}

export default NotificationCard
