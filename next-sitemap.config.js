/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nizamportfolio-henna.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: "./public",
  // This ensures only one sitemap is generated, no sitemapindex
  transform: async (config, path) => {
    return {
      loc: config.siteUrl + path,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    };
  },
  // Disable creating sitemap index
  sitemapIndexSize: 0,
};
