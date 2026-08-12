"use client";

import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { SITE } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-stroke py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <Reveal>
        <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Contact</p>
        <h2 className="font-display italic text-5xl md:text-7xl mb-16 text-text">Let&apos;s talk</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-16">
        <Reveal delay={0.1} className="space-y-8">
          <div>
            <p className="text-xs text-muted uppercase tracking-wide mb-1">Email</p>
            <a href={`mailto:${SITE.email}`} className="text-text hover:opacity-70 transition-opacity">
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-wide mb-1">Phone</p>
            <a href={`tel:${SITE.phoneHref}`} className="text-text hover:opacity-70 transition-opacity">
              {SITE.phone}
            </a>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-wide mb-1">Location</p>
            <p className="text-text">{SITE.location}</p>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-text transition-colors border border-stroke rounded-full px-4 py-2"
            >
              LinkedIn
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-text transition-colors border border-stroke rounded-full px-4 py-2"
            >
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
