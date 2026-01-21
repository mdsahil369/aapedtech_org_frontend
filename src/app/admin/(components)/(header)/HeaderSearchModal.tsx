"use client";

// External imports
import { useEffect, useRef } from "react";
import clsx from "clsx";
// UI imports
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
// Component imports

export default function HeaderSearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  /* ESC CLOSE */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  /* OUTSIDE CLICK */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[70] flex items-start justify-center",
        "transition-all duration-300",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      {/* BACKDROP */}
      <div
        className={clsx(
          "absolute inset-0",
          "bg-black/60",
          "transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* MODAL */}
      <div
        ref={ref}
        className={clsx(
          "relative mt-20 w-[92%] max-w-xl",
          "transition-all duration-300",
          open
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-95 -translate-y-2 opacity-0",
        )}
      >
        <div
          className="
            rounded-sm
            border border-border
            bg-card/80
            backdrop-blur-xl
            shadow-2xl
            overflow-hidden
          "
        >
          {/* INPUT BAR */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
            <Search size={18} className="text-muted-foreground" />
            <Input
              autoFocus
              placeholder="Search anything…"
              className="
                border-0 bg-muted
                focus-visible:ring-0
                text-sm 
              "
            />
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* BODY */}
          <div className="p-4 text-sm text-muted-foreground">
            Start typing to search…
          </div>
        </div>
      </div>
    </div>
  );
}
