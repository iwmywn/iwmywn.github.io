import { useRippleEffect } from "~/hooks/useRippleEffect"

export function RippleEffect() {
  const ripples = useRippleEffect()

  return (
    <>
      {ripples.map(({ id, x, y }) => (
        <span
          key={id}
          className="ripple animate-ripple pointer-events-none absolute h-4 w-4 bg-[url('/favicon.svg')] bg-contain bg-center bg-no-repeat"
          style={{
            top: `${y}px`,
            left: `${x}px`,
          }}
        />
      ))}
    </>
  )
}
