"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (stored) {
      setTheme(stored);
    } else if (systemDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme, mounted };
}
