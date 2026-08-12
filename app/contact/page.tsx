import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Sid Lim",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Contact</p>
      <h1 className="font-display italic text-5xl md:text-7xl mb-16 text-text">Let&apos;s talk</h1>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
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
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
