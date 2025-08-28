/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    SITE_URL:
      process.env.SITE_URL || "https://nizamportfolio-henna.vercel.app/",
  },
};

module.exports = nextConfig;
