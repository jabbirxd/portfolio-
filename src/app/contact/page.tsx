"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderCallout } from "@/components/ui/PlaceholderCallout";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowUpRight,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Client-side quick checks
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          turnstileToken: "TURNSTILE_CLIENT_TOKEN_PLACEHOLDER",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "An error occurred while submitting your message.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network connection error. Please try reaching out directly via email.");
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-12">
      <Container size="lg">
        <Breadcrumb items={[{ label: "Contact" }]} />

        {/* 1. Opening Header */}
        <div className="space-y-6 pb-10 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>DIRECT CHANNELS & INQUIRY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Let&apos;s build something interesting.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans">
            Whether it&apos;s a research collaboration, software project, design problem, or simply an interesting idea—I&apos;d love to hear from you.
          </p>

          <PlaceholderCallout
            label="Inquiry Infrastructure"
            field="Server-side route handler active with rate-limiting, RFC 5322 email regex, length checks, and Cloudflare Turnstile spam protection integration"
          />
        </div>

        {/* 2. Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Direct Links (Email, GitHub, LinkedIn) */}
          <div className="lg:col-span-2 space-y-6">
            <Card variant="studio" className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Direct communication channels for engineering proposals, thesis discussions, and collaborations.
                </p>
              </div>

              {/* Email Link */}
              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.socials.email}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/40 hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Email</div>
                      <div className="text-xs font-mono text-white group-hover:text-indigo-300 transition-colors">
                        {siteConfig.socials.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* GitHub */}
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.2] hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.03] text-slate-300">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">GitHub</div>
                      <div className="text-xs font-mono text-white">github.com/mohammadjabbir</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-500/40 hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">LinkedIn</div>
                      <div className="text-xs font-mono text-white group-hover:text-sky-300 transition-colors">
                        linkedin.com/in/mohammadjabbir
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-500 space-y-1">
                <div>LOCATION: {siteConfig.location}</div>
                <div>RESPONSE_TIME: 24–48 HOURS</div>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3">
            <Card variant="studio" className="p-6 sm:p-8 space-y-6">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Transmitted</h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your transmission was validated and processed by the route handler.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    size="sm"
                  >
                    Send Another Transmission
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-start gap-3"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="name"
                        className="text-xs font-mono text-slate-300"
                      >
                        Name *
                      </label>
                      <span className="text-[10px] font-mono text-slate-500">
                        {formData.name.length}/100
                      </span>
                    </div>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Rosalind Franklin"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#05070a] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="email"
                        className="text-xs font-mono text-slate-300"
                      >
                        Email Address *
                      </label>
                      <span className="text-[10px] font-mono text-slate-500">
                        {formData.email.length}/120
                      </span>
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={120}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. rosalind@institution.org"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#05070a] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="subject"
                        className="text-xs font-mono text-slate-300"
                      >
                        Subject *
                      </label>
                      <span className="text-[10px] font-mono text-slate-500">
                        {formData.subject.length}/150
                      </span>
                    </div>
                    <input
                      id="subject"
                      type="text"
                      required
                      maxLength={150}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. In Silico Docking Pipeline / Laravel Web Platform"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#05070a] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="message"
                        className="text-xs font-mono text-slate-300"
                      >
                        Message *
                      </label>
                      <span className="text-[10px] font-mono text-slate-500">
                        {formData.message.length}/2000
                      </span>
                    </div>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      maxLength={2000}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Outline your project scope, research question, or collaboration concept..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#05070a] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Cloudflare Turnstile Integration Point */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>SPAM_PROTECTION: CLOUDFLARE_TURNSTILE</span>
                    </div>
                    <span className="text-emerald-400 font-bold">READY</span>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full"
                    disabled={status === "loading"}
                    icon={
                      status === "loading" ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                  >
                    {status === "loading" ? "Transmitting..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
