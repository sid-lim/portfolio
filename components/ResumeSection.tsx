"use client";

import Reveal from "./Reveal";
import Timeline from "./Timeline";
import { BASE_PATH, GRADIENT } from "@/lib/constants";

const EDUCATION = [
  {
    title: "Southern Illinois University Edwardsville",
    period: "2020 — 2024",
    text: "Bachelor of Science, Information Systems",
  },
];

const CERTIFICATIONS = [
  {
    title: "Databricks Certified Data Engineer Associate",
    period: "2025",
    text: "Databricks",
  },
  {
    title: "Databricks Certified Generative AI Engineer Associate",
    period: "2025",
    text: "Databricks",
  },
];

const EXPERIENCE = [
  {
    title: "Data Product Lead — UNCOMN",
    period: "June 2025 — Present",
    text: "Authored and implemented a department-wide standard for data product creation while spearheading the implementation of medallion architecture in existing and future data pipelines.",
  },
  {
    title: "Data Engineer 2 — UNCOMN",
    period: "Jan 2025 — Present",
    text: "Responsible for engineering Data as a Product (DaaP) for higher-visibility and ease of use for non-technical key stakeholders to curate data products such as business intelligence dashboards. Also responsible for drafting and maintaining the official Standard Operating Procedure (SOP) documentation regarding the creation of DaaP.",
  },
  {
    title: "Data Engineer 1 — UNCOMN",
    period: "May 2024 — Dec 2024",
    text: "Built and optimized end-to-end data infrastructure by designing scalable pipelines, automating sentiment analysis workflows (40% throughput improvement), implementing efficient batch processing in Databricks, creating comprehensive monitoring systems, and transforming raw data into structured formats for business intelligence needs.",
  },
  {
    title: "Data Scientist Intern — UNCOMN",
    period: "Jan 2024 — Apr 2024",
    text: "Enhanced data operations through SQL query optimization, Python-based data validation scripts, ETL process redesign for improved performance, and technical evaluation of LLMs for potential infrastructure integration.",
  },
];

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="scroll-mt-28 border-t border-stroke py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <Reveal>
        <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Resume</p>
        <h2 className="font-display italic text-5xl md:text-7xl mb-16 text-text">Experience</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <Timeline title="Education" items={EDUCATION} />
      </Reveal>
      <Reveal delay={0.1}>
        <Timeline title="Certifications" items={CERTIFICATIONS} />
      </Reveal>
      <Reveal delay={0.1}>
        <Timeline title="Experience" items={EXPERIENCE} />
      </Reveal>

      <Reveal delay={0.15}>
        <section>
          <h3 className="font-display italic text-2xl md:text-3xl text-text mb-6">Full Resume</h3>
          <p className="text-sm text-muted leading-relaxed mb-6 max-w-2xl">
            Download my complete resume with detailed experience, projects, and certifications.
          </p>
          <a
            href={`${BASE_PATH}/files/Sid-Lim-Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block rounded-full"
          >
            <span
              className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: GRADIENT }}
            />
            <span className="relative block px-7 py-3.5 bg-text text-bg text-sm rounded-full transition-transform duration-300 group-hover:scale-105">
              View Resume (PDF)
            </span>
          </a>
        </section>
      </Reveal>
    </section>
  );
}
