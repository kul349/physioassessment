import tests from "@/data/tests"; 

export default function sitemap() {
  const baseUrl = "https://physioassessment.vercel.app/";

  // Static pages
  const staticPages = [
    "",
    "/test",
    "/about-us",
    "/assessment-stage",
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const testRoutes = tests.map((test) => ({
    url: `${baseUrl}/test/${test.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...testRoutes];
}
