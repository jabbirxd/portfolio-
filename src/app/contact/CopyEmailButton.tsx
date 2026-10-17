"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — user can still click the mailto link
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-studio)] transition-colors cursor-pointer border border-[var(--border-subtle)] rounded-lg px-2.5 py-1.5 mt-3"
    >
      <span aria-live="polite" role="status" className="inline-flex items-center gap-1.5">
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5" /> Copied
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" /> Copy
          </>
        )}
      </span>
    </button>
  );
}
