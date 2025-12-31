import { getTests } from "@/data/tests";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const baseUrl = "https://physioassessment.vercel.app";

  const staticPages = ["", "/test", "/about-us", "/assessment-stage"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const testPages = getTests.map((test) => ({
    url: `${baseUrl}/test/${test.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const pages = [...staticPages, ...testPages];

  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastModified}</lastmod>
          <changefreq>${page.changeFrequency}</changefreq>
          <priority>${page.priority}</priority>
        </url>`
        )
        .join("")}
    </urlset>
  `;
}
