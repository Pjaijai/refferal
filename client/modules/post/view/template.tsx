"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import LinkShareDrawer from "@/modules/post/components/drawers/link-share"
import PostHeader from "@/modules/post/components/info-display/header"
import PostStatusDisplay from "@/modules/post/components/info-display/status"
import usePostTypeTitle from "@/modules/post/hooks/post-type-title"
import {
  useCurrentLocale,
  useI18n,
} from "@/utils/services/internationalization/client"

import { EMessageType } from "@/types/common/message-type"
import { EPostStatus } from "@/types/common/post-status"
import { EReferralType } from "@/types/common/referral-type"
import { siteConfig } from "@/config/site"
import { PostNotFoundError } from "@/lib/exceptions"
import { cn } from "@/lib/utils"
import useGetPost from "@/hooks/api/post/get-post"
import useUserStore from "@/hooks/state/user/store"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import ContactButton from "@/components/customized-ui/buttons/contact"
import ProfileCard from "@/components/customized-ui/cards/profile"
import BaseClipboard from "@/components/customized-ui/clipboards/base"
import CompanyNameDisplay from "@/components/customized-ui/info-display/company"
import CreatedAtDisplay from "@/components/customized-ui/info-display/created-at"
import IndustryDisplay from "@/components/customized-ui/info-display/industry"
import LocationDisplay from "@/components/customized-ui/info-display/location"
import RequestCountDisplay from "@/components/customized-ui/info-display/requestion-count"
import YearsOfExperienceDisplay from "@/components/customized-ui/info-display/years-of-experience"
import { Icons } from "@/components/icons"
import PageStatusLayout from "@/components/layouts/page-status"

interface ReferralPostDetailsPageProps {
  postUuid: string | null
}
const ReferralPostDetailsPageTemplate: React.FunctionComponent<
  ReferralPostDetailsPageProps
> = ({ postUuid }) => {
  const t = useI18n()
  const router = useRouter()
  const { data: post, isLoading, isSuccess } = useGetPost(postUuid)
  const userUuid = useUserStore((state) => state.uuid)
  const isViewingOwnProfile = post?.created_by === userUuid
  const isOpen = post?.status === EPostStatus.ACTIVE
  const locale = useCurrentLocale()

  const { title: postTyeTitle } = usePostTypeTitle(post?.type)

  const handleBackToPostClick = () => {
    router.back()
  }
  return (
    <PageStatusLayout
      error={new PostNotFoundError()}
      isLoading={isLoading}
      isSuccess={isSuccess}
    >
      <div className="flex flex-row items-center justify-between">
        <Button
          onClick={handleBackToPostClick}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "bg-transparent"
          )}
        >
          <p className="gap my-4 flex flex-row items-center text-sm text-muted-foreground">
            <Icons.smallArrowLeft className="text-sm" />{" "}
            <span>{t("general.back")}</span>
          </p>
        </Button>

        <div className="flex flex-row items-end justify-center gap-4">
          <div className="flex md:hidden">
            <LinkShareDrawer />
          </div>

          <div className="hidden md:block">
            <BaseClipboard
              className="flex flex-row items-center justify-center space-x-1 border-b border-muted-foreground text-sm"
              afterCopyContent={
                <>
                  <p>{t("share.copy_link")}</p>{" "}
                  <Icons.copy height={20} width={20} />
                </>
              }
              beforeCopyContent={
                <>
                  <p>{t("share.copied")}</p>
                  <Icons.copyCheck height={20} width={20} />
                </>
              }
              textValue={
                typeof window !== "undefined" ? window.location.href : ""
              }
            />
          </div>
        </div>
      </div>

      {post && (
        <div className="mt-5 flex h-full w-full flex-col md:mt-0">
          <div className="my-0 mb-5 flex flex-col justify-between gap-4 md:my-5 md:flex-row">
            <div className="flex w-full flex-col">
              <div className="mb-3 flex w-full basis-full flex-row items-center justify-between">
                <div className="flex flex-row gap-2">
                  <PostStatusDisplay
                    postStatus={post.status}
                    className="flex-end"
                  />

                  {postTyeTitle && <Badge>{postTyeTitle}</Badge>}
                </div>

                <CreatedAtDisplay
                  applyTo="page"
                  createdAt={post.created_at && post.created_at.toString()}
                  className="justify-end text-xs text-muted-foreground"
                />
              </div>
              <div className="mr-2 flex w-full flex-col-reverse justify-between md:flex-row">
                <div className="flex w-full items-center justify-between gap-1 ">
                  <div className="flex flex-col gap-2 ">
                    <PostHeader
                      title={post.job_title}
                      url={post.url}
                      subtitle={
                        post.company_name && (
                          <CompanyNameDisplay name={post.company_name} />
                        )
                      }
                    />
                  </div>
                </div>
              </div>

              <Separator className="my-3" />
              <div className="text-sm">
                {(post.city || post.province || post.country) && (
                  <LocationDisplay
                    province={
                      locale === "zh-hk"
                        ? post.province && post.province.cantonese_name
                        : post.province && post.province.english_name
                    }
                    country={
                      locale === "zh-hk"
                        ? post.country && post.country.cantonese_name
                        : post.country && post.country.english_name
                    }
                    city={
                      locale === "zh-hk"
                        ? post.city && post.city.cantonese_name
                        : post.city && post.city.english_name
                    }
                    className="xs:max-w-full mb-2 max-w-sm"
                  />
                )}
                {post.industry && (
                  <IndustryDisplay
                    industry={
                      locale === "zh-hk"
                        ? post.industry && post.industry.cantonese_name
                        : post.industry && post.industry.english_name
                    }
                    className="xs:max-w-full mb-2 max-w-xs"
                  />
                )}
                {post.year_of_experience !== null && (
                  <YearsOfExperienceDisplay
                    yearOfExperience={post.year_of_experience}
                    className="xs:max-w-full mb-2  max-w-xs"
                  />
                )}

                {typeof post.contact_request_count === "number" &&
                  post.contact_request_count > 0 && (
                    <RequestCountDisplay
                      count={post.contact_request_count}
                      className="xs:max-w-full mb-2   max-w-xs"
                    />
                  )}
              </div>
            </div>
            {/* separator that is only shown on mobile */}
            <Separator className="md:hidden" />

            <div className="flex min-w-[200px] flex-col gap-4 md:basis-1/4">
              {isViewingOwnProfile && (
                <Link
                  className={buttonVariants({ variant: "default" })}
                  href={`${siteConfig.page.editPost.href}/${postUuid}`}
                  prefetch
                >
                  <Icons.pencil className="mr-1 h-4 w-4" />
                  {t("post.edit_post")}
                </Link>
              )}
              {!isViewingOwnProfile && isOpen && (
                <ContactButton
                  username={post.user?.username || "?"}
                  toUuid={post.created_by}
                  messageType={EMessageType.POST}
                  postUuid={post.uuid}
                  receiverType={EReferralType.REFERRER}
                />
              )}
              <ProfileCard
                uuid={post.created_by}
                username={post.user && post.user.username}
                photoUrl={post.user && post.user.avatar_url}
              />
            </div>
          </div>

          {/* separator that is only shown on tablet or larger */}
          <Separator className="mb-5 hidden md:block" />

          <div className="whitespace-pre-wrap break-normal">
            {post.description}
          </div>
        </div>
      )}
    </PageStatusLayout>
  )
}

export default ReferralPostDetailsPageTemplate
