import TestDetailPage from "@/components/TestDetailPage";
import { getTests } from "@/data/tests"; // Server-safe function

export async function generateMetadata({ searchParams }) {
  const search = searchParams?.search || "";
  const initialTests = await getTests(search);

  const pageTitle = search
    ? `${search} Physical Assessment Tests | PhysioTest`
    : "Physical Assessment Test Guides | Learn Medical Tests";

  const pageDesc = search
    ? `Find guides and explanations for "${search}" physical assessment tests. Understand what happens during your exam and what results mean.`
    : "Explore our library of physical assessment test guides. Easy-to-understand explanations of common orthopedic tests performed by therapists and doctors.";

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: [
      "physical assessment tests",
      search || "orthopedic tests",
      "medical tests",
      "physical therapy",
      "test guides",
    ],
    alternates: {
      canonical: "https://physioassessment.vercel.app/test",
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: "https://physioassessment.vercel.app/test",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
    },
    other: [
      {
        type: "application/ld+json",
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SearchResultsPage",
          name: "Physical Assessment Test Guides",
          description: pageDesc,
          url: "https://physioassessment.vercel.app/test",
          numberOfResults: initialTests.length,
          itemListElement: initialTests.map((test, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: test.test_name,
            description: test.purpose,
            url: `https://physioassessment.vercel.app/test/${test.slug}`,
          })),
        }),
      },
    ],
  };
}

export default async function TestPage({ searchParams }) {
  const initialTests = await getTests(searchParams?.search || "");
  const initialSearch = searchParams?.search || "";

  return (
    <TestDetailPage initialTests={initialTests} initialSearch={initialSearch} />
  );
}
