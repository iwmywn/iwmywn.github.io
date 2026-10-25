/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */

import type { Dispatch, SetStateAction } from "react"
import { flushSync } from "react-dom"

interface ToggleDarkProps {
  event: MouseEvent
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
}

export function toggleDark({ event, isDark, setIsDark }: ToggleDarkProps) {
  const nextDark = !isDark

  try {
    localStorage.setItem("theme", nextDark ? "dark" : "light")
  } catch {
    // Ignore storage errors to ensure theme toggling remains functional
  }

  const isAppearanceTransition =
    typeof document.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (!isAppearanceTransition) {
    setIsDark(nextDark)
    document.documentElement.classList.toggle("dark", nextDark)
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(() => {
    flushSync(() => {
      setIsDark(nextDark)
      document.documentElement.classList.toggle("dark", nextDark)
    })
  })

  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    document.documentElement.animate(
      {
        clipPath: clipPath,
      },
      {
        duration: 2000,
        easing: "ease-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  })
}
