"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ClipboardCheck,
  Activity,
  Stethoscope,
  Dumbbell,
  PlayCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const stages = [
  {
    step: "Initial Evaluation",
    description:
      "Understand the patient's symptoms, medical history, lifestyle, and goals to identify the root cause and set expectations for physiotherapy assessment.",
    icon: <ClipboardCheck className="w-6 h-6" />,
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    imagePrompt:
      "A professional female physiotherapist consulting with a patient in a bright modern clinic setting, high quality photography, soft natural lighting",
  },
  {
    step: "Physical Tests",
    description:
      "Perform range of motion, strength, flexibility, posture, and neurological tests to assess musculoskeletal health and identify limitations.",
    icon: <Activity className="w-6 h-6" />,
    color: "bg-teal-600",
    lightColor: "bg-teal-50",
    textColor: "text-teal-700",
    imagePrompt:
      "Physiotherapist measuring a patient's knee range of motion with a goniometer, clinical setting, focus on medical expertise, modern physiotherapy equipment",
  },
  {
    step: "Diagnosis & Plan",
    description:
      "Interpret test results and create a personalized rehabilitation or exercise plan to guide recovery and improve physical function.",
    icon: <Stethoscope className="w-6 h-6" />,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    imagePrompt:
      "Physiotherapist explaining a personalized digital exercise plan on a tablet to a patient, medical diagrams in background, professional atmosphere",
  },
  {
    step: "Follow-Up & Exercises",
    description:
      "Provide instructions for exercises and follow-up monitoring to ensure safe, efficient progress in physiotherapy assessment and practice.",
    icon: <Dumbbell className="w-6 h-6" />,
    color: "bg-emerald-700",
    lightColor: "bg-emerald-100",
    textColor: "text-emerald-800",
    imagePrompt:
      "A patient performing guided physical therapy exercises with resistance bands in a rehabilitation center, bright airy space, encouraging environment",
  },
];

const AssessmentStagesPage = () => {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      name: "Physiotherapy Assessment Stages",
      description:
        "Complete guide to physiotherapy assessment stages and clinical evaluation process",
      url: "https://physioassessment.vercel.app/assessment-stages",
      educationalLevel: "Professional Training",
      hasPart: stages.map((stage, index) => ({
        "@type": "EducationalOccupationalCredential",
        name: stage.step,
        description: stage.description,
        position: index + 1,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    document.title =
      "Physiotherapy Assessment Stages Guide | Clinical Evaluation Process";

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

    updateMetaTag(
      "description",
      "Learn the 4 stages of physiotherapy assessment: Initial Evaluation, Physical Tests, Diagnosis & Plan, and Follow-Up exercises. Complete clinical guide for patients."
    );
    updateMetaTag(
      "keywords",
      "physiotherapy assessment stages, clinical evaluation, physical examination, rehabilitation process, patient education"
    );
    updateMetaTag(
      "og:title",
      "Physiotherapy Assessment Stages | Clinical Guide"
    );
    updateMetaTag(
      "og:description",
      "Understand each stage of the physiotherapy assessment process with our detailed clinical guide"
    );
    updateMetaTag("og:type", "article");
    updateMetaTag("og:url", "https://physioassessment.vercel.app/assessment-stages");

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
      <header className="relative py-28 overflow-hidden bg-slate-50 border-b border-emerald-100/50">
        <nav className="mb-8 text-sm text-slate-500" aria-label="breadcrumb">
          <ol className="flex items-center justify-center gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-emerald-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/test"
                className="hover:text-emerald-600 transition-colors"
              >
                Assessment Tests
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-900 font-semibold">Assessment Stages</li>
          </ol>
        </nav>{" "}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.5px,transparent_0.5px)] [bg-size-24px_24px] opacity-[0.15] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100/80 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Clinical Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Physiotherapy{" "}
              <span className="text-emerald-600 underline decoration-emerald-200 decoration-8 underline-offset-4">
                Assessment Stages
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Master the standardized evaluation framework designed to optimize
              patient recovery and clinical precision through systematic
              analysis. Learn the 4 essential stages of physiotherapy
              assessment.
            </p>
          </motion.div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 pb-32 pt-20">
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-emerald-100 -translate-x-1/2" />

          <div className="space-y-32">
            {stages.map((stage, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div
                      className={`absolute -top-6 -left-6 w-24 h-24 rounded-full blur-3xl opacity-20 ${stage.color}`}
                    />

                    <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white border border-slate-100 group-hover:shadow-emerald-900/5 transition-all duration-500">
                      <div className="aspect-4/3 relative flex items-center justify-center bg-slate-50">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center overflow-hidden">
                          <div
                            className={`absolute top-0 right-0 p-8 opacity-5 ${stage.textColor}`}
                          >
                            {stage.icon}
                          </div>
                          <div
                            className={`p-6 rounded-2xl shadow-xl mb-6 text-white ${stage.color}`}
                          >
                            {React.cloneElement(stage.icon, { size: 48 })}
                          </div>
                          <h4 className="text-xl font-bold text-slate-800 mb-2">
                            Stage {index + 1}
                          </h4>
                          <p className="text-slate-400 text-sm max-w-50 italic">
                            Visualization of {stage.step} in clinical
                            environment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl text-white shadow-[0_10px_20px_-5px_rgba(16,185,129,0.3)] ${stage.color}`}
                    >
                      {stage.icon}
                    </div>
                    <div>
                      <div
                        className={`text-xs font-black uppercase tracking-[0.2em] ${stage.textColor}`}
                      >
                        Level 0{index + 1}
                      </div>
                      <div className="h-1 w-12 bg-emerald-200 rounded-full mt-1" />
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    {stage.step}
                  </h2>

                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {stage.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Protocol compliance",
                      "Patient safety first",
                      "Outcome tracking",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-500 text-sm font-medium"
                      >
                        <ChevronRight
                          className="w-4 h-4 text-emerald-500"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-lg text-xs font-bold uppercase tracking-wider">
                      Standard Practice
                    </span>
                    <span className="px-4 py-1.5 bg-slate-50 text-slate-600 border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-wider">
                      Required Stage
                    </span>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>

        {/* ===== SECTION 1: RELATED TESTS INTERNAL LINKS ===== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 mb-40"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Explore Assessment Tests
          </h2>
          <p className="text-slate-600 mb-12 max-w-2xl">
            Each assessment stage utilizes specific clinical tests. Dive deeper
            into our comprehensive library of physiotherapy assessment guides.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/test"
              className="group p-8 bg-emerald-50 border border-emerald-200 rounded-2xl hover:border-emerald-500 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700">
                View All Assessment Tests
              </h3>
              <p className="text-slate-600 mb-4">
                Browse our complete library of physiotherapy assessment tests
                with detailed explanations and video demonstrations.
              </p>
              <span className="flex items-center gap-2 text-emerald-600 font-bold">
                Explore tests <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>

            <Link
              href="/about"
              className="group p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700">
                Learn About Our Approach
              </h3>
              <p className="text-slate-600 mb-4">
                Understand how we translate complex physiotherapy assessments
                into patient-friendly educational resources.
              </p>
              <span className="flex items-center gap-2 text-emerald-600 font-bold">
                Learn more <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </motion.section>

        {/* ===== SECTION 2: VIDEO TUTORIAL ===== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-40"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-teal-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000" />

            <div className="relative bg-slate-900 rounded-4xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 p-10 md:p-16 flex flex-col justify-center bg-slate-800/50">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20">
                    <PlayCircle
                      className="text-white w-10 h-10"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Practical{" "}
                    <span className="text-emerald-400">Walkthrough</span>
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Watch a complete, real-time assessment demonstration.
                    Perfect for visual learners looking to refine their patient
                    handling techniques and understand the clinical process.
                  </p>
                  <div className="flex items-center gap-4 text-emerald-400 font-bold text-sm uppercase tracking-widest">
                    <span className="w-8 h-px bg-emerald-400/30" />
                    Video Tutorial
                  </div>
                </div>

                <div className="lg:col-span-3 bg-black relative flex items-center justify-center min-h-75 md:min-h-125">
                  <iframe
                    src="https://www.youtube.com/embed/JFMhJBCfHbE"
                    title="Complete Physiotherapy Assessment Walkthrough Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===== SECTION 3: EXTERNAL RESOURCES ===== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Professional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Professional organization providing clinical guidelines and best
                practices for physiotherapy assessments.
              </p>
              <span className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                Visit APTA <ArrowRight size={14} aria-hidden="true" />
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
                Comprehensive medical information about conditions and treatment
                approaches.
              </p>
              <span className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                Explore <ArrowRight size={14} aria-hidden="true" />
              </span>
            </a>

            <a
              href="https://pubmed.ncbi.nlm.nih.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700">
                PubMed
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Access peer-reviewed research on physiotherapy assessment
                techniques and outcomes.
              </p>
              <span className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                Search research <ArrowRight size={14} aria-hidden="true" />
              </span>
            </a>
          </div>
        </motion.section>

        {/* ===== SECTION 4: FOOTER CTA ===== */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 px-8 bg-linear-to-r from-emerald-600 to-emerald-700 rounded-3xl text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master Assessment Stages?
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Explore our complete library of physiotherapy tests and develop a
            deeper understanding of clinical assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/test"
              className="px-10 py-4 bg-white text-emerald-700 font-bold rounded-full hover:shadow-lg transition-all"
            >
              Explore Test Library
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 bg-emerald-800/40 text-white font-bold border border-emerald-400/50 rounded-full hover:bg-emerald-800 transition-all"
            >
              Learn Our Mission
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default AssessmentStagesPage;
