import React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderCalloutProps {
  label?: string;
  field: string;
  className?: string;
}

export function PlaceholderCallout({
  label = "Placeholder Content",
  field,
  className,
}: PlaceholderCalloutProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20",
        className
      )}
    >
      <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
      <span>
        <strong>{label}:</strong> {field}
      </span>
    </div>
  );
}
