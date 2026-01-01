import TestPageClient from "@/components/DetailsPage";
import { getTests } from "@/data/tests";

export async function generateMetadata({ searchParams }) {
const params=await searchParams;
const search=params.search
  const pageTitle = search
    ? `${search} Physical Assessment Tests | PhysioTest`
    : "Physical Assessment Test Guides | Learn Medical Tests";

  const pageDesc = search
    ? `Find guides and explanations for "${search}" physical assessment tests. Understand what happens during your exam and what results mean.`
    : "Explore our library of physical assessment test guides. Easy-to-understand explanations of common orthopedic tests performed by therapists and doctors.";

  return {
    title: pageTitle,
    description: pageDesc,
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: "https://physioassessment.vercel.app/test",
      siteName: "PhysioTest",
      images: [
        {
          url: "https://physioassessment.vercel.app/images/open-graph.jpg",
          width: 1200,
          height: 630,
          alt: "PhysioTest Physical Assessment Tests",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: ["https://physioassessment.vercel.app/images/open-graph.jpg"],
    },
  };
}

export default async function TestPage({ searchParams }) {
  const params = await searchParams; 
  const initialSearch = params?.search || "";
  const initialTests = getTests;

  return (
    <TestPageClient initialTests={initialTests} initialSearch={initialSearch} />
  );
}
