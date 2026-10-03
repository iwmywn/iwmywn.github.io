import { useState } from "react"

import { quotes } from "~/data/quotes"

export function RandomQuote() {
  const [randomQuote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)])

  return (
    <div className="flex w-[90vw] flex-col items-center justify-center gap-y-2 text-center font-medium select-none sm:w-[75vw]">
      <q>
        <i>{randomQuote.text}</i>
      </q>
      <span className="text-sm opacity-75">{randomQuote.source}</span>
    </div>
  )
}
