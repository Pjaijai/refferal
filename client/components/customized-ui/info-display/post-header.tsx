import React, { PropsWithChildren, ReactNode } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

import TooltipWrapper from "../tool/tooltip-wrapper"

interface IPostHeaderProps {
  title: ReactNode | string
  subtitle: ReactNode | string
  url: string | null
}
const PostHeader: React.FunctionComponent<
  PropsWithChildren<IPostHeaderProps>
> = ({ title, subtitle, url }) => {
  return (
    <div>
      <CardTitle className="flex items-center">
        {title}
        123
        {url && (
          <TooltipWrapper
            tooltipTrigger={
              <Link href={url} target="_blank">
                <Icons.link className="m-2 h-4 w-4" />
              </Link>
            }
            tooltipContent={<span>相關連結</span>}
          />
        )}
      </CardTitle>
      <div className="flex items-center justify-start text-sm text-muted-foreground">
        {subtitle}
      </div>
    </div>
  )
}

export default PostHeader
