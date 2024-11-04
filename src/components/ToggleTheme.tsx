import { useEffect, useState } from "react";
import toggleDark from "../features/theme/toggleDark";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState<boolean>(() =>
    document.documentElement.classList.contains("dark"),
  );

  const handleToggleDark = (event: MouseEvent) => {
    toggleDark({ event, isDark, setIsDark });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");

    window.addEventListener("dblclick", handleToggleDark);
    // using document.body will wait for animation to finish
    return () => {
      window.removeEventListener("dblclick", handleToggleDark);
    };
  }, [isDark]);

  return null;
}
