import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  Play,
  Info,
  ClipboardCheck,
  UserCircle,
  Video,
  BookOpen,
  ShieldAlert,
} from "lucide-react";
import { getTests } from "@/data/tests";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const test = getTests.find((t) => t.slug === slug);
  if (!test) return { title: "Test Not Found" };

  return {
    title: `${test.test_name} Assessment Guide | Clinical Testing`,
    description: `Learn about the ${test.test_name} test. ${test.purpose} Understand how it's performed, what positive results mean, and when to seek care.`,
    keywords: [
      test.test_name,
      test.region,
      "assessment test",
      "clinical test",
      "physical examination",
    ].join(", "),
    openGraph: {
      title: `${test.test_name} Assessment Guide`,
      description: test.purpose,
      type: "article",
      url: `https://physioassessment.vercel.app/tests/${slug}`,
      images: [
        {
          url: "https://physioassessment.vercel.app/images/img-slider-1.webp",
          width: 1200,
          height: 630,
          alt: test.test_name,
        },
      ],
    },
    canonical: `https://physioassessment.vercel.app/tests/${slug}`,
  };
}

export function generateStaticParams() {
  return getTests.map((test) => ({ slug: test.slug }));
}

function getEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+| \/ytscreeningroom\?v=))([\w\-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export default async function SingleTestDetails({ params }) {
  const { slug } = await params;
  const test = getTests.find((t) => t.slug === slug);

  if (!test) notFound();

  const embedUrl = getEmbedUrl(test.youtube);
  const relatedTests = getTests
    .filter((t) => t.region === test.region && t.slug !== test.slug)
    .slice(0, 4);

  // Schema markup for the test
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalEntity",
    name: test.test_name,
    description: test.purpose,
    about: {
      "@type": "MedicalCondition",
      name: test.region,
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <nav className="text-sm py-3 px-6 text-slate-500" aria-label="breadcrumb">
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex items-center flex-wrap gap-2"
        >
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-2"
          >
            <Link
              href="/"
              itemProp="item"
              className="hover:text-emerald-600 transition-colors"
            >
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
            <span className="text-slate-400">/</span>
          </li>

          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-2"
          >
            <Link
              href="/test"
              itemProp="item"
              className="hover:text-emerald-600 transition-colors"
            >
              <span itemProp="name">Assessment Tests</span>
            </Link>
            <meta itemProp="position" content="2" />
            <span className="text-slate-400">/</span>
          </li>

          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span itemProp="name" className="text-slate-900 font-semibold">
              {test.test_name}
            </span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      <main className="max-w-4xl mx-auto px-6 mt-6">
        <header className="mb-12">
          <div className="inline-block bg-emerald-50 text-emerald-700 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Focus Area: <span className="capitalize">{test.region}</span>
          </div>

          <h1 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
            Understanding the {test.test_name} Assessment
          </h1>

          <p className="text-xl text-slate-500 leading-relaxed border-l-4 border-emerald-100 pl-6 italic">
            {test.purpose}
          </p>
        </header>

        <section className="mb-16" aria-labelledby="video-section">
          <div className="flex items-center gap-2 mb-4 text-slate-400">
            <Video size={18} aria-hidden="true" />
            <h2
              id="video-section"
              className="text-sm font-bold uppercase tracking-wider"
            >
              Watch How It&apos;s Done
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200/50 border border-slate-100">
            {embedUrl ? (
              <div className="aspect-video relative">
                <iframe
                  src={embedUrl}
                  title={`${test.test_name} instructional video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            ) : (
              <div className="aspect-video flex flex-col items-center justify-center text-slate-400">
                <Play
                  size={40}
                  className="mb-2 opacity-20"
                  aria-hidden="true"
                />
                <p className="text-sm">Instructional video coming soon</p>
              </div>
            )}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <section>
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
              <UserCircle className="text-emerald-500" aria-hidden="true" />
              How do I start?
            </h3>
            <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
              {test.starting_position}
            </p>
          </section>

          <section>
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
              <ClipboardCheck className="text-emerald-500" aria-hidden="true" />
              What happens?
            </h3>
            <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
              {test.procedure}
            </p>
          </section>
        </div>

        <section
          className="bg-slate-900 text-white p-10 rounded-[2.5rem] mb-12 shadow-xl shadow-slate-200"
          aria-labelledby="results-section"
        >
          <div className="flex items-center gap-2 text-emerald-400 mb-6">
            <Info size={20} aria-hidden="true" />
            <h3
              id="results-section"
              className="text-sm font-bold uppercase tracking-widest"
            >
              In Plain English
            </h3>
          </div>
          <h4 className="text-2xl font-bold mb-4">
            What Does a Positive Result Mean?
          </h4>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            {test.positive_test_criteria}
          </p>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h5 className="text-xs font-bold text-emerald-400 uppercase mb-2">
              Helpful Tip:
            </h5>
            <p className="text-sm text-slate-400 leading-relaxed">
              {test.grading_or_notes}
            </p>
          </div>
        </section>

        <section
          className="bg-rose-50 border border-rose-100 p-8 rounded-3xl mb-16"
          aria-labelledby="safety-section"
        >
          <div className="flex items-center gap-2 text-rose-600 mb-4">
            <ShieldAlert size={20} aria-hidden="true" />
            <h3 id="safety-section" className="font-bold text-lg">
              Safety First
            </h3>
          </div>
          <p className="text-sm text-rose-700 leading-relaxed">
            This guide is to help you understand what happens in a clinic.{" "}
            <strong>Do not try to diagnose yourself.</strong> If you have severe
            pain, swelling, or cannot put weight on your leg, please visit an
            urgent care center or your doctor immediately.
          </p>
        </section>

        {relatedTests.length > 0 && (
          <section className="mb-16" aria-labelledby="related-section">
            <h3 id="related-section" className="text-2xl font-bold mb-6">
              Other {test.region} Tests
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTests.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/test/${related.slug}`}
                    className="block p-4 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-lg hover:bg-emerald-50 transition-all"
                  >
                    <h4 className="font-semibold text-slate-900">
                      {related.test_name}
                    </h4>
                    <p className="text-sm text-slate-500 truncate">
                      {related.purpose}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-center mt-6">
              <Link
                href="/assessment-stage"
                className="text-emerald-600 font-bold hover:underline"
              >
                Browse All Assessment Tests
              </Link>
            </div>
          </section>
        )}

        <footer className="mt-24 pt-12 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400 max-w-xl mx-auto leading-loose italic">
            This is an open learning resource designed to empower patients with
            knowledge. Information is updated regularly by our community of
            health advocates.
          </p>
        </footer>
      </main>
    </div>
  );
}
