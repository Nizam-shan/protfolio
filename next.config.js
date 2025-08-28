/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    SITE_URL: process.env.SITE_URL || "https://nizamshan.dev",
  },
};

module.exports = nextConfig;
