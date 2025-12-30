import { tests } from "@/data/tests";

const baseUrl = "https://physioassessment.vercel.app";

function generateSitemapXml() {
  const staticPages = ["", "/test", "/about-us", "/assessment-stage"];

  const staticUrls = staticPages
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `
    )
    .join("");

  const testUrls = tests
    .map(
      (test) => `
    <url>
      <loc>${baseUrl}/test/${test.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${testUrls}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSitemapXml();
  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
