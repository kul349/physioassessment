import { tests } from "@/data/tests";

export async function GET() {
  const baseUrl = "https://physioassessment.vercel.app";

  // Add homepage explicitly
  const staticPages = ["/", "/test", "/about-us", "/assessment-stage"];
  const staticUrls = staticPages
    .map(
      (path) => `<url>
  <loc>${baseUrl}${path}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>`
    )
    .join("");

  const testUrls = tests
    .map(
      (test) => `<url>
  <loc>${baseUrl}/test/${test.slug}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`
    )
    .join("");

  // Remove the starting newline before XML declaration
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${testUrls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
