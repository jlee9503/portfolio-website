import { useEffect, useState } from "react";

const useThemeHook = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem("theme");

    const handleThemeChange = () => {
      if (userPreference) {
        let themeSelected = userPreference === "dark" ? "dark" : "light";
        setMode(themeSelected);

        if (themeSelected === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let themeSelected = mediaQuery.matches ? "dark" : "light";
        setMode(themeSelected);

        if (themeSelected === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return { mode, setMode };
};

export default useThemeHook;
