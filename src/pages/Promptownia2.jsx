import { useEffect, useState } from 'react'
import PromptCardExpanded from '../components/PromptCardExpanded'

export default function Promptownia2() {
  const [prompty, setPrompty] = useState([])

  useEffect(() => {
    fetch('/data/prompty_full.json')
      .then(res => res.json())
      .then(data => setPrompty(data))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-4">🧠 Promptownia 2.0™</h1>
      <p className="text-sm text-gray-400 mb-6">Zbiory poznawcze z dokumentacją, cytatem i sensem użycia.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {prompty.map((p, i) => (
          <PromptCardExpanded key={i} prompt={p} />
        ))}
      </div>
    </div>
  )
}