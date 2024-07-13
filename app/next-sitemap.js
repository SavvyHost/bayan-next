const fetch = require('node-fetch');

const getDynamicPaths = async () => {
  const res = await fetch('https://bayan-academy.com/');
  const data = await res.json();
  
  return data.map(item => `/dynamic/${item.slug}`);
};

module.exports = async () => {
  const dynamicPaths = await getDynamicPaths();

  return {
    siteUrl: "https://bayan-academy.com/",
    generateRobotsTxt: true,
    transform: async (config, path) => {
      return {
        loc: "https://bayan-academy.com/",
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        changefreq: 'daily',
        priority: 0.7,
      };
    },
    additionalPaths: async (config) => {
      const dynamicPaths = await getDynamicPaths();
      return dynamicPaths.map((path) => {
        return {
          loc: "https://backend.bayan-academy.com/", 
          lastmod: new Date().toISOString(),
        };
      });
    },
  };
};
