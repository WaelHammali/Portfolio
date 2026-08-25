"use client";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-display font-semibold mb-3 text-center text-slate-100">Let&apos;s connect</h2>
        <p className="text-slate-400 text-center mb-10">
          Open to cloud, AI, and cybersecurity internships, collaborations, and projects.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <a
            href="mailto:wael.hammali@etudiant-enit.utm.tn"
            className="rounded-xl glass-card px-4 py-4 text-center text-sm hover:border-[#94b8d4]/40 transition-colors"
          >
            <div className="text-xs text-slate-400">Email</div>
            <div className="font-semibold text-slate-100">wael.hammali@etudiant-enit.utm.tn</div>
          </a>
          <a
            href="tel:+21694916106"
            className="rounded-xl glass-card px-4 py-4 text-center text-sm hover:border-[#94b8d4]/40 transition-colors"
          >
            <div className="text-xs text-slate-400">Phone</div>
            <div className="font-semibold text-slate-100">+216 94 916 106</div>
          </a>
          <div className="rounded-xl glass-card px-4 py-4 text-center text-sm">
            <div className="text-xs text-slate-400">Location</div>
            <div className="font-semibold text-slate-100">Tunis, Tunisia</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-[#7b8fa8]/20 bg-[#12141c]/70 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#94b8d4]/50 focus:bg-[#12141c] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-[#7b8fa8]/20 bg-[#12141c]/70 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#94b8d4]/50 focus:bg-[#12141c] transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-[#7b8fa8]/20 bg-[#12141c]/70 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#94b8d4]/50 focus:bg-[#12141c] transition-colors resize-none"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 px-6 rounded-xl bg-[#94b8d4]/15 border border-[#94b8d4]/30 hover:bg-[#94b8d4]/25 hover:border-[#94b8d4]/50 disabled:opacity-60 disabled:cursor-not-allowed text-[#c8d6e5] font-medium transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-[#94b8d4]">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400">
              Something went wrong. Email me directly at{" "}
              <a href="mailto:wael.hammali@etudiant-enit.utm.tn" className="underline">
                wael.hammali@etudiant-enit.utm.tn
              </a>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
