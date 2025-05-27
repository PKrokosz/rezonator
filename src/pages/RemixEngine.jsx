import { useEffect, useState } from 'react'
import DonkaOverlay from '../components/DonkaOverlay'
import cx from 'classnames'

export default function RemixEngine() {
  const [prompty, setPrompty] = useState([])
  const [selected, setSelected] = useState([])
  const [showDonka, setShowDonka] = useState(false)
  const [mix, setMix] = useState(null)

  useEffect(() => {
    fetch('/data/prompty_full.json')
      .then(res => res.json())
      .then(data => setPrompty(data))
  }, [])

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id))
    } else if (selected.length < 2) {
      setSelected([...selected, id])
    }
  }

  const getRemixCard = () => {
    if (selected.length !== 2) return null
    const [a, b] = selected.map(id => prompty.find(p => p.id.toString() === id.toString()))
    if (!a || !b) return null

    const fusionQuote = `Kiedy ${a.nazwa} spotyka ${b.nazwa}, dzieją się rzeczy nieliniowe...`
    const fusionValue = ((a.cena + b.cena) * 0.9).toFixed(0)
    const multiplier = 1 + (a.tagi?.length + b.tagi?.length) * 0.05

    const handleRemix = () => {
      setShowDonka(true)
      setMix([a.nazwa, b.nazwa])
    }

    return (
      <div className="mt-6 bg-blue-900 text-white p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-2">🔀 {a.nazwa} × {b.nazwa}</h2>
        <p className="italic text-pink-200 mb-2">„{fusionQuote}”</p>
        <p className="text-sm text-gray-300">Mnożnik poznawczy: <strong>x{multiplier.toFixed(1)}</strong></p>
        <p className="text-sm text-gray-300">Cena remixu: <strong>{fusionValue} PLN</strong></p>
        <button
          onClick={handleRemix}
          className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded text-sm font-bold">
          ✨ Pokaż ocenę Donki
        </button>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-4">Remix Engine™</h1>
      <p className="text-sm text-gray-400 mb-6">Wybierz dwa prompty, aby wygenerować remix z opisem i mnożnikiem poznawczym.</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {prompty.map((p) => (
          <div key={p.id}
               className={cx(
                 "p-4 border rounded-xl cursor-pointer transition",
                 selected.includes(p.id)
                   ? "border-pink-500 bg-[#222]"
                   : "border-[#333] bg-[#111]"
               )}
               onClick={() => toggleSelect(p.id)}>
            <h3 className="text-pink-300 font-bold text-lg">{p.nazwa}</h3>
            <p className="text-sm italic text-gray-400">"{p.cytat}"</p>
            <p className="text-xs text-gray-500 mt-1">Kategoria: {p.kategoria} | Cena: {p.cena} PLN</p>
            <p className="text-xs text-gray-500">Tagi: {p.tagi?.join(", ")}</p>
          </div>
        ))}
      </div>

      {getRemixCard()}

      {showDonka && <DonkaOverlay mix={mix} onClose={() => setShowDonka(false)} />}
    </div>
  )
}