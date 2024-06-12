const fetch = require('node-fetch');

const getDynamicPaths = async () => {
  // استبدل هذا برابط API الخاص بك أو منطق جلب البيانات الديناميكية
  const res = await fetch('https://backend.bayan-acaemy.com/');
  const data = await res.json();
  
  return data.map(item => `/dynamic/${item.slug}`);
};

module.exports = async () => {
  const dynamicPaths = await getDynamicPaths();

  return {
    siteUrl: "https://backend.bayan-acaemy.com/",
    generateRobotsTxt: true,
    transform: async (config, path) => {
      return {
        loc: "https://backend.bayan-acaemy.com/",
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        changefreq: 'daily',
        priority: 0.7,
      };
    },
    additionalPaths: async (config) => {
      const dynamicPaths = await getDynamicPaths();
      return dynamicPaths.map((path) => {
        return {
          loc: "https://backend.bayan-acaemy.com/", 
          lastmod: new Date().toISOString(),
        };
      });
    },
  };
};
