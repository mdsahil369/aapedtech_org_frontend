"use client";

// External imports
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import clsx from "clsx";
// UI imports
import { Home, AlertTriangle } from "lucide-react";
// Component imports

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        "flex min-h-screen flex-col items-center justify-center px-6 text-center transition-colors duration-300",
        theme === "dark"
          ? "bg-zinc-950 text-zinc-100"
          : "bg-zinc-50 text-zinc-900",
      )}
    >
      {/* Icon */}
      <div
        className={clsx(
          "mb-6 rounded-full p-6 transition-all",
          theme === "dark" ? "bg-zinc-900" : "bg-white shadow-xl",
        )}
      >
        <AlertTriangle
          className={clsx(
            "h-12 w-12",
            theme === "dark" ? "text-red-400" : "text-red-500",
          )}
        />
      </div>

      {/* 404 Text */}
      <h1 className="text-5xl font-extrabold tracking-tight">404</h1>

      {/* Description */}
      <p
        className={clsx(
          "mt-4 max-w-md text-lg leading-relaxed",
          theme === "dark" ? "text-zinc-400" : "text-zinc-600",
        )}
      >
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      {/* Home Button */}
      <Link
        href="/"
        className={clsx(
          "mt-10 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all",
          theme === "dark"
            ? "bg-white text-black hover:bg-zinc-200"
            : "bg-black text-white hover:bg-zinc-800",
        )}
      >
        <Home className="h-4 w-4" />
        Back to Home
      </Link>
    </div>
  );
}
