import "./globals.css"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Physio Assessment Tests",
  description:
    "Free physiotherapy assessment tests and guidance for physiotherapists and students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-slate-900 antialiased">
        <Header />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
