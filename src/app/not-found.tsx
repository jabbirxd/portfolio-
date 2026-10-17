import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32">
      <Container size="md">
        <div className="text-center glass-panel rounded-3xl p-8 sm:p-16 space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto text-[var(--accent-studio)]">
            <Terminal className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-studio)]">
              Error 404
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
              Page Not Found
            </h1>
          </div>

          <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto leading-relaxed">
            This page doesn't exist — maybe the link moved or I renamed something. Here's where you can go instead.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Button href="/work" variant="primary" size="md">
              See My Work
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
