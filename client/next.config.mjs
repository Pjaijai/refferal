/** @type {import('next').NextConfig} */

import withPWA from "next-pwa"

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})
export default pwaConfig({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost"], // Add the domain where your images are hosted
  },
})
