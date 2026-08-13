"use client";

import Reveal from "./Reveal";
import VideoCutout from "./VideoCutout";
import LiveSnapshot from "./LiveSnapshot";
import { BASE_PATH, GRADIENT } from "@/lib/constants";

type Project = {
  title: string;
  tags: string[];
  text: string;
  span: string;
  /** Path to a short muted mp4 clip, e.g. `${BASE_PATH}/videos/my-app.mp4` */
  video?: string;
  /** Poster frame shown before the clip loads/plays */
  poster?: string;
  /** Live site to render a screenshot of (used when `video` isn't set) */
  url?: string;
  /** Click-through link; defaults to `url` when omitted */
  href?: string;
};

const PROJECTS: Project[] = [
  {
    title: "RookForm",
    tags: ["React", "TypeScript", "Business"],
    text: "An advanced and luxurious site built for a minimalist clothing brand.",
    span: "md:col-span-12",
    video: `${BASE_PATH}/videos/project-1.mp4`,
    href: "https://rookform.com",
  },
  {
    title: "BC Forge AI",
    tags: ["React", "TypeScript", "Agentic AI", "CRM", "Startup"],
    text: "BC Forge AI utilizes an AI integrated workflow to help blue collar businesses generate and maintain leads.",
    span: "md:col-span-12",
    video: `${BASE_PATH}/videos/project-2.mp4`,
    href: "https://bcforgeai.com",
  },
  {
    title: "UNCOMN ARC",
    tags: ["SQL", "TypeScript", "Data Engineering", "AI"],
    text: "All-in-one solution to an internal professional development dashboard + Agentic AI integrated internal company community hub.",
    span: "md:col-span-12",
    video: `${BASE_PATH}/videos/project-3.mp4`,
    href: "https://uncomn-arc.vercel.app",
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
          A selection of projects / businesses that I have helped create as well as an all-in-one
          professional development application and business internal hub.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        {PROJECTS.map((project, i) => {
          const media = Boolean(project.video || project.url);
          const link = project.href ?? project.url;

          return (
            <Reveal key={project.title} delay={i * 0.08} className={project.span}>
              <div className="group relative h-full rounded-3xl p-[1px]">
                <span
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: GRADIENT }}
                />
                <div className="relative h-64 md:h-80 rounded-3xl bg-surface border border-stroke group-hover:border-transparent overflow-hidden p-8 flex flex-col justify-between transition-colors duration-300">
                  {project.video ? (
                    <VideoCutout src={project.video} poster={project.poster} />
                  ) : project.url ? (
                    <LiveSnapshot url={project.url} />
                  ) : (
                    <>
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
                    </>
                  )}

                  {media && (
                    <>
                      <div className="absolute inset-0 bg-black/55" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
                    </>
                  )}

                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-20"
                      aria-label={`View ${project.title}`}
                    />
                  )}

                  <div className="relative z-10 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] uppercase tracking-wide rounded-full px-3 py-1 border ${
                          media ? "text-white/80 border-white/20" : "text-muted border-stroke"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative z-10">
                    <h3
                      className={`font-display italic text-2xl md:text-3xl mb-3 ${
                        media ? "text-white" : "text-text"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed max-w-md ${
                        media ? "text-white/70" : "text-muted"
                      }`}
                    >
                      {project.text}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
