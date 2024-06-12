export default function robot() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `https://backend.bayan-acaemy.com/sitemap.xml`,
  };
}
