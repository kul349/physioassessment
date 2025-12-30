"use client";
import { useTests } from "../../hooks/useTests";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Activity,
  Stethoscope,
  Search,
  ArrowRight,
} from "lucide-react";

function TestDetailPage() {
  const { filtered, search, setSearch, loading, error } = useTests();
  const [visibleCount, setVisibleCount] = useState(20);
  const visibleTests = filtered.slice(0, visibleCount);
  const [prevSearch, setPrevSearch] = useState(search);

  if (search !== prevSearch) {
    setPrevSearch(search);
    setVisibleCount(20);
  }

  // Add JSON-LD schema for search results page
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "SearchResultsPage",
      name: "Physical Assessment Test Guides",
      description: "Search and find guides for physical assessment tests",
      url: "https://yoursite.com/test",
      numberOfResults: filtered.length,
      itemListElement: visibleTests.map((test, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: test.test_name,
        description: test.purpose,
        url: `https://yoursite.com/test/${test.slug}`,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Update page title and meta tags based on search
    const pageTitle = search
      ? `${search} Physical Assessment Tests | Test Guides`
      : "Physical Assessment Test Guides | Learn Medical Tests";

    document.title = pageTitle;

    const updateMetaTag = (name, content) => {
      let tag =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(name.includes("og:") ? "property" : "name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const pageDesc = search
      ? `Find guides and explanations for "${search}" physical assessment tests. Understand what happens during your exam and what results mean.`
      : "Explore our library of physical assessment test guides. Easy-to-understand explanations of common orthopedic tests performed by therapists and doctors.";

    updateMetaTag("description", pageDesc);
    updateMetaTag(
      "keywords",
      `physical assessment tests, ${
        search || "orthopedic tests"
      }, medical tests, physical therapy, test guides`
    );
    updateMetaTag("og:title", pageTitle);
    updateMetaTag("og:description", pageDesc);
    updateMetaTag("og:type", "website");
    updateMetaTag("og:url", "https://yoursite.com/test");
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", pageTitle);
    updateMetaTag("twitter:description", pageDesc);

    return () => {
      document.head.removeChild(script);
    };
  }, [filtered, search, visibleTests]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Loading assessments...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error.message || "Something went wrong"}
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans">
        <div className="bg-white border-b border-slate-200 pt-16 pb-12 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Activity className="w-3 h-3" aria-hidden="true" />
              Education Library
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Physical Assessment{" "}
              <span className="text-emerald-600">Test Guides</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Simple, easy-to-understand explanations of common physical
              assessments. Search for a body part or a specific test name below.
            </p>
            <div className="relative max-w-xl mx-auto group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search
                  className="h-5 w-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                placeholder="Search by test name or body part (e.g., Lachman, knee, shoulder)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search assessment tests"
                className="block w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-800">
              {search ? `Results for "${search}"` : "All Assessment Tests"}
            </h2>
            <span
              className="text-slate-400 text-sm font-medium"
              aria-live="polite"
            >
              {filtered.length} test{filtered.length !== 1 ? "s" : ""} found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTests.map((test) => (
              <article
                key={test.id}
                className="group bg-white rounded-4xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-500/30 hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-slate-50 text-[10px] font-black uppercase tracking-wider rounded-lg group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                      {test.region}
                    </span>
                    <div
                      className="p-2 rounded-full bg-slate-50 text-slate-300 group-hover:text-emerald-500 transition-colors"
                      aria-hidden="true"
                    >
                      <Stethoscope className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {test.test_name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                    {test.purpose}
                  </p>
                </div>
                <Link
                  href={`/test/${test.slug}`}
                  className="flex items-center text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors"
                >
                  Learn more
                  <ArrowRight
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search
                    className="w-8 h-8 text-slate-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  No guides found
                </h3>
                <p className="text-slate-500">
                  Try a different body part or keyword. For example: knee,
                  shoulder, ankle, or test name like "Lachman".
                </p>
              </div>
            )}
          </div>

          <section className="mt-16 p-8 bg-white rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-slate-900">
                How to use this library
              </h3>
              <p className="text-sm text-slate-500">
                These guides are designed to help you understand what happens
                during a physical exam. Click on any test to see a video
                demonstration and a step-by-step breakdown of the assessment.
              </p>
            </div>
          </section>

          {visibleCount < filtered.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 20)}
                className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
              >
                Load More Tests
              </button>
            </div>
          )}

          <p className="text-[10px] text-slate-400 text-center mt-12 uppercase tracking-[0.2em] font-bold">
            ⚠️ Not for diagnostic use. Consult a doctor for any pain or
            symptoms.
          </p>
        </div>
      </div>
    </>
  );
}

export default TestDetailPage;
