"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { GRADIENT, SITE } from "@/lib/constants";

const ROLES = ["Data Engineer", "Pipeline Architect", "Data Product Lead", "Analytics Engineer"];
const ROLE_INTERVAL = 2000;
const VIDEO_SRC = "https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8";

const article = (word: string) => (/^[aeiou]/i.test(word) ? "An" : "A");

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, ROLE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React doesn't reliably write the `muted` attribute into the
    // server-rendered HTML, so browsers can block autoplay before
    // hydration runs. Set it imperatively and kick off playback ourselves.
    video.muted = true;
    video.defaultMuted = true;

    const play = () => video.play().catch(() => {});

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_SRC;
      video.addEventListener("loadedmetadata", play);
      play();
      return () => video.removeEventListener("loadedmetadata", play);
    }

    let hls: import("hls.js").default | undefined;
    let cancelled = false;

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled) return;
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(VIDEO_SRC);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, play);
      }
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".name-reveal", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 }, 0.1).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          Data Engineering Portfolio
        </p>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text mb-6">
          {SITE.name}
        </h1>

        <p className="blur-in text-lg md:text-xl lg:text-2xl text-muted mb-10">
          {article(ROLES[roleIndex])}{" "}
          <span key={roleIndex} className="font-display italic text-text animate-fade-in">
            {ROLES[roleIndex]}
          </span>{" "}
          based in St. Louis.
        </p>

        <p className="blur-in text-sm md:text-base text-muted leading-relaxed max-w-md mb-12 mx-auto">
          Designing scalable data pipelines that turn raw information into insights that drive real
          business outcomes.
        </p>

        <div className="blur-in flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/resume" className="group relative rounded-full">
            <span
              className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: GRADIENT }}
            />
            <span className="relative block px-7 py-3.5 bg-text text-bg text-sm rounded-full transition-transform duration-300 group-hover:scale-105">
              View Resume
            </span>
          </Link>

          <a href={`mailto:${SITE.email}`} className="group relative rounded-full">
            <span
              className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: GRADIENT }}
            />
            <span className="relative block px-7 py-3.5 bg-bg text-text text-sm rounded-full border-2 border-stroke transition-transform duration-300 group-hover:scale-105">
              Reach out...
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-3 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <span className="absolute left-1/2 -translate-x-1/2 top-0 w-1.5 h-1.5 rounded-full bg-text animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
