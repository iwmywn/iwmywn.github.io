import { useState, useEffect } from "react"

let rippleCounter = 0

interface Ripple {
  id: number
  x: number
  y: number
}

export function useRippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    const timeouts = new Set<ReturnType<typeof setTimeout>>()

    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const newRipple: Ripple = {
        id: ++rippleCounter,
        x: clientX,
        y: clientY,
      }
      setRipples((prev) => [...prev, newRipple])

      const timeoutId = setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
        timeouts.delete(timeoutId)
      }, 600)

      timeouts.add(timeoutId)
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return ripples
}
