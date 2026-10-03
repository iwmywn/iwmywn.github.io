import { useEffect, useState } from "react"

import { toggleDark } from "~/features/toggleDark"

export function ToggleTheme() {
  const [isDark, setIsDark] = useState<boolean>(() =>
    document.documentElement.classList.contains("dark")
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")

    const handleToggleDark = (event: MouseEvent) => {
      toggleDark({ event, isDark, setIsDark })
    }

    document.body.addEventListener("dblclick", handleToggleDark)

    return () => document.body.removeEventListener("dblclick", handleToggleDark)
  }, [isDark])

  return null
}
