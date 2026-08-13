"use client";

import Reveal from "./Reveal";
import { GRADIENT } from "@/lib/constants";

const PROJECTS = [
  {
    title: "Data as a Product Framework",
    tags: ["Databricks", "Medallion Architecture", "Governance"],
    text: "Authored the department-wide standard for Data as a Product development and led implementation of medallion architecture across existing and future pipelines for DoD stakeholders.",
    span: "md:col-span-7",
  },
  {
    title: "Joint Petroleum Enterprise Pipelines",
    tags: ["Python", "SQL", "ETL / ELT"],
    text: "Designed and maintained scalable Databricks pipelines that transform complex data into structured formats powering business intelligence across the Joint Petroleum Enterprise.",
    span: "md:col-span-5",
  },
  {
    title: "Sentiment Analysis Automation",
    tags: ["Qlik Sense", "Reporting", "Automation"],
    text: "Built automated reporting workflows that streamlined sentiment analysis processing, increasing throughput by 40%.",
    span: "md:col-span-5",
  },
  {
    title: "CI/CD & VAULTIS Governance",
    tags: ["GitLab", "AWS GovCloud", "Data Governance"],
    text: "Implemented CI/CD workflows across GBFMD data projects and applied the VAULTIS framework to keep every data product visible, trusted, and secure.",
    span: "md:col-span-7",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 border-t border-stroke py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
    >
      <Reveal>
        <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Projects</p>
        <h2 className="font-display italic text-5xl md:text-7xl mb-6 text-text">Selected work</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-muted leading-relaxed max-w-2xl mb-16">
          A selection of the data products and pipelines I&apos;ve built, from foundational
          governance frameworks to the automated workflows that keep stakeholders informed.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08} className={project.span}>
            <div className="group relative h-full rounded-3xl p-[1px]">
              <span
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: GRADIENT }}
              />
              <div className="relative h-full min-h-[280px] rounded-3xl bg-surface border border-stroke group-hover:border-transparent overflow-hidden p-8 flex flex-col justify-between transition-colors duration-300">
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "14px 14px",
                  }}
                />
                <span className="absolute top-6 right-8 font-display italic text-6xl text-stroke select-none">
                  0{i + 1}
                </span>

                <div className="relative z-10 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-wide text-muted border border-stroke rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative z-10">
                  <h3 className="font-display italic text-2xl md:text-3xl text-text mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed max-w-md">{project.text}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
