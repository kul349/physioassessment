"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Activity,
  Stethoscope,
  Search,
  ArrowRight,
  Filter,
  ExternalLink,
} from "lucide-react";

export default function TestPageClient({ initialTests, initialSearch }) {
  const [search, setSearch] = useState(initialSearch);
  const [tests, setTests] = useState(initialTests);
  const [visibleCount, setVisibleCount] = useState(20);

  const filtered = search
    ? initialTests.filter(
        (t) =>
          t.test_name.toLowerCase().includes(search.toLowerCase()) ||
          t.region.toLowerCase().includes(search.toLowerCase())
      )
    : initialTests;

  const visibleTests = filtered.slice(0, visibleCount);

  const testsByRegion = {
    Knee: filtered.filter((t) => t.region === "Knee"),
    Shoulder: filtered.filter((t) => t.region === "Shoulder"),
    Ankle: filtered.filter((t) => t.region === "ankel"),
    Hip: filtered.filter((t) => t.region === "Hip"),
    Elbow: filtered.filter((t) => t.region === "elbow"),
    Wrist: filtered.filter((t) => t.region === "Wrist/Hand"),
    Spine: filtered.filter((t) => t.region === "Cervical Spine"),
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisibleCount(20), 0);
    return () => clearTimeout(timer);
  }, [search]);
  

  return (
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
        {!search && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Filter size={20} className="text-emerald-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                Browse Tests by Body Region
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(testsByRegion).map(([region, tests]) =>
                tests.length > 0 ? (
                  <button
                    key={region}
                    onClick={() => setSearch(region)}
                    className="p-4 bg-white border border-slate-100 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
                  >
                    <h3 className="font-bold text-slate-900 group-hover:text-emerald-700">
                      {region} Tests
                    </h3>
                    <p className="text-xs text-slate-500">
                      {tests.length} guides
                    </p>
                  </button>
                ) : null
              )}
            </div>
          </section>
        )}

        {/* Test Cards */}
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
                Read the {test.test_name} guide
                <ArrowRight
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>

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
          ⚠️ Not for diagnostic use. Consult a doctor for any pain or symptoms.
        </p>
      </div>
    </div>
  );
}
