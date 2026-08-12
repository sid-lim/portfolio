import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Sid Lim",
};

const CAPABILITIES = [
  {
    title: "Data Pipelining",
    text: "Orchestrating automated workflows that efficiently extract, transform, and load data between systems. Expertise in designing scalable pipelines that ensure reliable data movement from source to destination, with comprehensive monitoring and validation to maintain data integrity throughout the process.",
  },
  {
    title: "Data Engineering",
    text: "Building robust data ecosystems that transform raw information into valuable analytical assets. Experience implementing batch processing solutions, optimizing query performance, and creating structured data models that support business intelligence needs while ensuring security, scalability, and accessibility.",
  },
  {
    title: "Data Visualization & Analytics",
    text: "Transforming complex datasets into actionable insights through interactive dashboards and reports using QlikSense, Power BI, and Python. Expertise in designing intuitive visualizations that communicate trends, patterns, and metrics to drive data-informed decision making.",
  },
  {
    title: "AI/ML Integration",
    text: "Evaluating and implementing machine learning solutions within existing data infrastructure. Experience assessing large language models for business applications, designing appropriate data architectures for AI workflows, and creating pipelines that enable seamless integration of predictive analytics into business processes.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
      <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">About</p>
      <h1 className="font-display italic text-5xl md:text-7xl mb-12 text-text">Sid Lim</h1>

      <div className="space-y-6 max-w-2xl text-muted leading-relaxed mb-20">
        <p>
          I&apos;m a detail-oriented Data Engineer with a passion for transforming raw data into
          valuable insights. Based in St. Louis, MO, I specialize in designing and maintaining
          scalable data pipelines that drive business outcomes.
        </p>
        <p>
          I have hands-on experience with ETL/ELT processes and a strong foundation in data
          management systems. Currently holding a Secret clearance and bringing practical expertise
          in the complete data engineering lifecycle, from pipeline development to optimization.
        </p>
      </div>

      <h2 className="font-display italic text-3xl md:text-4xl mb-8 text-text">
        Core Technical Capabilities
      </h2>
      <div className="grid sm:grid-cols-2 gap-px bg-stroke rounded-2xl overflow-hidden border border-stroke">
        {CAPABILITIES.map((cap) => (
          <div key={cap.title} className="bg-surface p-8">
            <h3 className="font-display italic text-xl text-text mb-3">{cap.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{cap.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
