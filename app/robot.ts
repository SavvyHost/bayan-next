export default function robot() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `https://backend.bayan-academy.com/sitemap.xml`,
  };
}
