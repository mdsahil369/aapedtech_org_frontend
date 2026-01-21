"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext =
  createContext<ThemeContextType | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // load saved theme
  useEffect(() => {
    const saved =
      (localStorage.getItem("org-theme") as Theme) ??
      "light";
    setTheme(saved);
    setMounted(true);
  }, []);

  // apply theme
  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );

    localStorage.setItem("org-theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  if (!mounted) return null;

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  return ctx;
};
