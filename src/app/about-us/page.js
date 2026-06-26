import AboutClient from "@/components/AboutUsClient";

export const metadata = {
  title: "About Us | Physio Tests App",
  description:
    "Learn about our mission to simplify physiotherapy education for patients worldwide.",
  alternates: {
    canonical: "https://physioassessment.vercel.app/about-us",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
