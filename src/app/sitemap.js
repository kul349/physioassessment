import { tests } from "@/data/tests";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const baseUrl = "https://physioassessment.vercel.app";

  const staticPages = ["", "/test", "/about-us", "/assessment-stage"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const testPages = tests.map((test) => ({
    url: `${baseUrl}/test/${test.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...testPages];
}
