import HomePage from "@/components/Homepage";
import Script from "next/script";

export const metadata = {
  title: "Physiotherapy Assessment Tests Guide | PhysioTest",
  description:
    "Understand physiotherapy assessment tests with patient-friendly guides, videos, and step-by-step explanations.",

  keywords: [
    "physiotherapy assessment tests",
    "physical therapy tests",
    "patient education physiotherapy",
    "physio test guide",
  ],

  alternates: {
    canonical: "https://physioassessment.vercel.app",
  },

  openGraph: {
    title: "PhysioTest - Physiotherapy Assessment Tests Explained",
    description:
      "Clear and simple explanations of physiotherapy assessment tests for patients and students.",
    url: "https://physioassessment.vercel.app",
    siteName: "PhysioTest",
    images: [
      {
        url: "https://physioassessment.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PhysioTest Physiotherapy Assessment Tests",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PhysioTest – Physiotherapy Assessment Tests",
    description:
      "Patient-friendly physiotherapy assessment test guides with videos.",
    images: ["https://physioassessment.vercel.app/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PhysioTest",
            url: "https://physioassessment.vercel.app",
            logo: "https://physioassessment.vercel.app/logo.png",
            sameAs: [
              "https://facebook.com/physiotest",
              "https://twitter.com/physiotest",
            ],
          }),
        }}
      />
      <HomePage />
    </>
  );
}
