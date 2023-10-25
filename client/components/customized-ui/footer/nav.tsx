"use client"

import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

const NavFooter = () => {
  return (
    <footer className="mt-12 flex flex-col items-center justify-center gap-2 border-t-2 p-2 md:flex-row">
      <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground ">
        <a href="mailto:r1r69.referalah@gmail.com">
          <Icons.mail />
        </a>

        <Link
          className="text-sm text-muted-foreground"
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
        >
          <Icons.github />
        </Link>

        <div className="flex flex-row gap-2">
          <Link
            className="text-sm text-muted-foreground"
            href={siteConfig.page.privacyPolicy.href}
          >
            Privacy Policy
          </Link>
          <Separator orientation="vertical" />
          <Link
            className="text-sm text-muted-foreground"
            href={siteConfig.page.termsAndConditions.href}
          >
            Terms and Conditions
          </Link>
          <Link
            className="text-sm text-muted-foreground"
            href={siteConfig.page.about.href}
          >
            {siteConfig.page.about.name}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default NavFooter
