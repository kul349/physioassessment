"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle, BookOpen, Users } from "lucide-react";
import Image from "next/image";
import Information from "@/components/Information";
import CommonConditionsSection from "@/components/CommonConditionsSection";
import PhysioFAQ from "@/components/FAQ";
import DownloadSection from "@/components/DownloadSection";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/img-slider-1.webp",
      label: "Open Learning Library",
      title: "Demystifying Physiotherapy Assessment Tests.",
      description:
        "We've simplified physiotherapy tests so you can understand what happens during your check-up and what your results actually mean.",
      bgColor: "#4f7661",
    },
    {
      id: 2,
      image: "/images/img-service2.webp",
      label: "Patient Education",
      title: "Simple guides for common clinical tests.",
      description:
        "Learn about the tests your therapist performs using clear instructions and helpful videos designed specifically for patients.",
      bgColor: "#4f7661",
    },
    {
      id: 3,
      image: "/images/scroll2.webp",
      label: "Empower Your Recovery",
      title: "Be an active partner in your physical healing.",
      description:
        "Knowledge is the first step to recovery. Explore our library to feel more confident and prepared for your next appointment.",
      bgColor: "#4f7661",
    },
  ];

  const slidesRef = useRef(slides);

 

  return (
    <>
      

      <h1 className="sr-only">
        PhysioTest - Understand Physiotherapy Assessment Tests for Your Recovery
      </h1>

      <div className="px-4 sm:px-6 lg:px-8 mt-10 min-h-screen bg-white font-sans">
        {/* Hero Slider */}
        <div className="relative w-full overflow-hidden mb-8 min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] px-3 sm:px-4 md:px-6 rounded-2xl md:rounded-[2.5rem] shadow-lg shadow-emerald-900/5 md:shadow-2xl md:shadow-emerald-900/10">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div
                  className="w-full md:w-1/2 flex items-center justify-center px-6 lg:px-20 py-10 sm:py-12 md:py-0 transition-colors duration-1000"
                  style={{ backgroundColor: slide.bgColor }}
                >
                  <div className="max-w-xl w-full">
                    <div className="text-white/80 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
                      <span className="w-8 h-1px bg-white/40"></span>
                      {slide.label}
                    </div>

                    <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-6 sm:mb-8">
                      {slide.title}
                    </h2>

                    <p className="text-white text-sm sm:text-base md:text-xl font-medium leading-relaxed mb-8 sm:mb-10 opacity-95">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                      <Link
                        href="/test"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-emerald-900 hover:scale-105 active:scale-95 font-bold tracking-wide rounded-full shadow-xl shadow-black/10 transition-all duration-300"
                      >
                        <span>Explore Physiotherapy Tests</span>
                        <ArrowRight size={20} aria-hidden="true" />
                      </Link>

                      <a
                        href="https://www.youtube.com/watch?v=JFMhJBCfHbE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 text-white group"
                        aria-label="Watch our introductory video on physiotherapy assessment tests"
                      >
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border border-white/40" />
                          <div className="absolute inset-1 rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110" />
                          <Play
                            size={18}
                            className="relative z-10 ml-1 fill-white"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="text-sm sm:text-base font-bold tracking-wide">
                          Watch Video
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 relative overflow-hidden bg-slate-100 h-[40vh] sm:h-[45vh] md:h-full">
                  <Image
                    src={slide.image}
                    alt={`Patient learning about ${slide.label} in physiotherapy assessment`}
                    fill
                    className={`absolute inset-0 object-cover transition-transform duration-6000 ease-out ${
                      currentSlide === index ? "scale-110" : "scale-100"
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />

                  <div className="absolute inset-0 bg-linear-to-r from-black/10 to-transparent md:hidden" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <main>
          <Information />
          <CommonConditionsSection />
          <DownloadSection />
        </main>
        <section className="my-16 py-12 px-6 bg-emerald-50 rounded-3xl border border-emerald-200">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">
            Why Choose PhysioTest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link
              href="/test"
              className="group p-8 bg-white rounded-2xl border border-emerald-100 hover:border-emerald-500 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <BookOpen size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700">
                Comprehensive Test Library
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Browse our complete collection of physiotherapy assessment tests
                with detailed explanations.
              </p>
              <span className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                View all tests <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>

            <Link
              href="/about"
              className="group p-8 bg-white rounded-2xl border border-emerald-100 hover:border-emerald-500 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Users size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700">
                Patient-Focused Design
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Created by healthcare professionals for patients who want to
                understand their care.
              </p>
              <span className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                Learn our mission <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>

            <div className="p-8 bg-white rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle
                  size={24}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Evidence-Based Content
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                All guides are reviewed by licensed physical therapy
                professionals.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: EXTERNAL RESOURCE LINKS ===== */}
        <section className="my-16 py-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">
            Trusted Medical Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a
              href="https://www.apta.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700">
                American Physical Therapy Association
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Professional organization with patient education resources and
                therapist directories.
              </p>
              <span className="text-emerald-600 font-bold text-sm">
                Visit APTA →
              </span>
            </a>

            <a
              href="https://www.mayoclinic.org/patient-care"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700">
                Mayo Clinic
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Comprehensive medical information about conditions and
                treatments.
              </p>
              <span className="text-emerald-600 font-bold text-sm">
                Visit Mayo Clinic →
              </span>
            </a>

            <a
              href="https://www.nih.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700">
                National Institutes of Health
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Medical research, health information, and clinical trials data.
              </p>
              <span className="text-emerald-600 font-bold text-sm">
                Visit NIH →
              </span>
            </a>
          </div>
        </section>

        <main id="learning">
          <PhysioFAQ />
        </main>

        <section className="my-20 py-12 px-8 bg-linear-to-r from-emerald-600 to-emerald-700 rounded-3xl text-white text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Understand Your Assessment Tests?
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Start exploring our library of patient-friendly physiotherapy test
            guides today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/test"
              className="px-10 py-4 bg-white text-emerald-700 font-bold rounded-full hover:shadow-lg transition-all"
            >
              Browse All Tests
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 bg-emerald-800/40 text-white font-bold border border-emerald-400/50 rounded-full hover:bg-emerald-800 transition-all"
            >
              Learn About Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
