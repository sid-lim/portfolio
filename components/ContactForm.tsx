"use client";

import { useState, type FormEvent } from "react";
import { GRADIENT, SITE } from "@/lib/constants";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        required
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-surface border border-stroke rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:border-text/30 transition-colors"
      />
      <input
        type="email"
        required
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-surface border border-stroke rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:border-text/30 transition-colors"
      />
      <textarea
        required
        placeholder="Your message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full bg-surface border border-stroke rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:border-text/30 transition-colors resize-none"
      />
      <button type="submit" className="group relative inline-block rounded-full">
        <span
          className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: GRADIENT }}
        />
        <span className="relative block px-7 py-3.5 bg-text text-bg text-sm rounded-full transition-transform duration-300 group-hover:scale-105">
          Send Message
        </span>
      </button>
    </form>
  );
}
