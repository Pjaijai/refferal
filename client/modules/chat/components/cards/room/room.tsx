import React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { formatCreatedAt } from "@/utils/common/helpers/format/created-at"

import { cn } from "@/lib/utils"
import useUpdateConversation from "@/hooks/api/message/update-conversation"
import BaseAvatar from "@/components/customized-ui/avatars/base"
import { Icons } from "@/components/icons"

interface IChatRoomCardProps {
  username: string
  text: string | null
  isSeen: boolean
  avatarUrl: null | string
  updatedAt: string | null //datetime with timezone
  uuid: string
  type: "sender" | "receiver"
  acceptRequest: boolean
}

const ChatRoomCard: React.FunctionComponent<IChatRoomCardProps> = ({
  text,
  isSeen,
  username,
  avatarUrl,
  updatedAt,
  uuid,
  type,
  acceptRequest,
}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { mutate: update } = useUpdateConversation()
  const { formattedDate } = formatCreatedAt(updatedAt)

  const truncatedText = text ? text.slice(0, 35) : ""

  const currentChatRoom = searchParams.get("conversation")
  const isCurrentChatRoom = currentChatRoom === uuid

  const handleClick = async () => {
    if (type === "sender" && !isSeen) {
      update({
        isSenderSeen: true,
        conversationUuid: uuid,
      })
    }
    if (type === "receiver" && !isSeen) {
      update({
        isReceiverSeen: true,
        conversationUuid: uuid,
      })
    }

    const param = new URLSearchParams()
    param.set("conversation", uuid)
    router.push("?" + param.toString())
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "flex w-full flex-row items-center gap-x-3 rounded-sm  p-2 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700",
        isCurrentChatRoom && "bg-gray-100 dark:bg-gray-700"
      )}
    >
      <BaseAvatar
        fallBack={username[0]}
        size="medium"
        url={avatarUrl || undefined}
        alt={username}
      />
      <div className="flex w-full flex-col">
        <div className="flex flex-row items-center justify-between ">
          <h4 className="font-semibold">{username}</h4>
          <p className="text-sm text-muted-foreground">{formattedDate}</p>
        </div>

        <div className="relative flex w-full  flex-row items-center justify-between">
          {acceptRequest ? (
            <p className="w-5/6 text-xs text-orange-700 dark:text-blue-400">
              此用戶向您發出對話申請
            </p>
          ) : (
            <p className="w-5/6 truncate text-muted-foreground">
              {truncatedText}
            </p>
          )}

          {!isSeen && (
            <Icons.bigDot className="absolute right-0 text-green-700  dark:text-yellow-300" />
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatRoomCard
