import { useState, useEffect } from "react"

interface Ripple {
  id: number
  x: number
  y: number
}

export function useRippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const newRipple = {
        id: Date.now(),
        x: clientX,
        y: clientY,
      }
      setRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 600)
    }

    window.addEventListener("click", handleClick)

    return () => window.removeEventListener("click", handleClick)
  }, [])

  return ripples
}
