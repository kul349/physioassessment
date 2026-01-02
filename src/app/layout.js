import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  title: {
    default: "Physio Assessment Tests",
    template: "%s | PhysioTest",
  },
  description:
    "Free physiotherapy assessment tests and guidance for physiotherapists and students.",

  applicationName: "PhysioTest",

  openGraph: {
    title: "PhysioTest – Physiotherapy Assessment Tests",
    description:
      "Free physiotherapy assessment tests and guidance for physiotherapists and students.",
    url: "https://physioassessment.vercel.app",
    siteName: "PhysioTest",
    type: "website",
    images: [
      {
        url: "https://physioassessment.vercel.app/images/open-graph.jpg",
        width: 1200,
        height: 630,
        alt: "PhysioTest Physiotherapy Assessment Tests",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PhysioTest – Physiotherapy Assessment Tests",
    description:
      "Free physiotherapy assessment tests and guidance for physiotherapists and students.",
    images: ["https://physioassessment.vercel.app/images/open-graph.jpg"],
  },

  appleWebApp: {
    title: "PhysioTest",
    statusBarStyle: "default",
    capable: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-8WHHY072DH" />

      <body className="bg-zinc-50 text-slate-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
