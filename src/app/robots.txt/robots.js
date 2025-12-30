export async function GET() {
  const robots = `
User-Agent: *
Allow: /
Disallow: /api
Disallow: /_next

Sitemap: https://physioassessment.vercel.app/sitemap.xml
  `.trim();

  return new Response(robots, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
