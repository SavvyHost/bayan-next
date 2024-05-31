/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl:  'https://backend.bayan-academy.com/',
    // generateRobotsTxt: true, // (optional)
    // ...other options
    transform: async (config, path) => {
      return {
        loc: path, // The location of the URL
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        changefreq: 'daily',
        priority: 0.7,
      };
    },
  }