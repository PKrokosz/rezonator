import { useEffect, useState } from 'react'
import RemixBox from '../components/RemixBox'

export default function Remix() {
  const [prompty, setPrompty] = useState([])
  const [wybrane, setWybrane] = useState([])
  const [remix, setRemix] = useState(null)

  useEffect(() => {
    fetch('/src/data/prompty.json')
      .then(res => res.json())
      .then(data => setPrompty(data))
  }, [])

  const togglePrompt = (id) => {
    setWybrane(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id].slice(-2)
    )
  }

  useEffect(() => {
    if (wybrane.length === 2) {
      const p1 = prompty.find(p => p.id === wybrane[0])
      const p2 = prompty.find(p => p.id === wybrane[1])
      const cena = Math.round((p1.cena + p2.cena) * 0.85)
      const komentarz = `Kiedy ${p1.nazwa} spotyka ${p2.nazwa}, dzieją się rzeczy nieliniowe...`
      setRemix({
        nazwa: `${p1.tag} × ${p2.tag}`,
        komentarz,
        mnoznik: 1.5,
        cena
      })
    } else {
      setRemix(null)
    }
  }, [wybrane, prompty])

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Remix Engine™</h1>
      <p className="mb-2 text-sm text-gray-400">Wybierz dwa prompty, aby wygenerować remix.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {prompty.map(p => (
          <label key={p.id} className="bg-gray-800 p-4 rounded-xl cursor-pointer flex flex-col">
            <input type="checkbox" checked={wybrane.includes(p.id)} onChange={() => togglePrompt(p.id)} />
            <span className="font-semibold text-pink-300 mt-2">{p.nazwa}</span>
            <span className="text-xs text-gray-400">{p.tag}</span>
          </label>
        ))}
      </div>
      {remix && <RemixBox remix={remix} />}
    </div>
  )
}