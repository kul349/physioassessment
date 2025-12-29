import HomePage from "@/components/homepage";

export const metadata = {
  title: "Physio Tests for Patients | Understand Physiotherapy Tests at Home",
  description:
    "Discover a reliable physiotherapy assessment app with clear test explanations, video guidance, and patient-friendly reports to support injury recovery and learning.",
  alternates: {
    canonical: "https://physioassessment.vercel.app/",
  },
  openGraph: {
    title: "Physio Tests for Patients",
    description: "Learn physiotherapy tests with videos and guides at home.",
    url: "https://physioassessment.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://physioassessment.vercel.app/images/img-slider-1.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Physio Tests for Patients",
        url: "https://physioassessment.vercel.app/",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://physioassessment.vercel.app/test?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "Physio Tests App",
        url: "https://physioassessment.vercel.app/",
        logo: "https://physioassessment.vercel.app/image/favicon_128x128.png",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
