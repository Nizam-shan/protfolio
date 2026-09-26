import { useState, useEffect, useCallback } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      applyTheme(initialTheme);
    }
  }, []);

  const applyTheme = (targetTheme) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", targetTheme);
    if (targetTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  };

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      try {
        localStorage.setItem("theme", newTheme);
      } catch (e) {
        console.error("Failed to save theme in localStorage:", e);
      }
      return newTheme;
    });
  }, []);

  return { theme, toggleTheme, mounted };
};

export default useTheme;
