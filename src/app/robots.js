export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/_next"],
      },
    ],
    sitemap: "https://physioassessment.vercel.app/sitemap.xml",
  };
}
