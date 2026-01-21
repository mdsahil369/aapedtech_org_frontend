"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import clsx from "clsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative flex items-center
        h-9 w-[72px]
        rounded-full
        bg-muted
        border border-border
        px-1
        transition-colors
      "
    >
      {/* SLIDER */}
      <span
        className={clsx(
          "absolute top-1 left-1 h-7 w-7 rounded-full",
          "bg-card shadow-sm transition-all duration-300",
          isDark && "translate-x-[36px]"
        )}
      />

      {/* SUN */}
      <span className="relative z-10 flex-1 flex justify-center">
        <Sun
          size={16}
          className={clsx(
            "transition-colors",
            !isDark
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        />
      </span>

      {/* MOON */}
      <span className="relative z-10 flex-1 flex justify-center">
        <Moon
          size={16}
          className={clsx(
            "transition-colors",
            isDark
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        />
      </span>
    </button>
  );
}
