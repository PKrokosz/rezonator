import { useState } from 'react'
import PakietKoszyk from '../components/PakietKoszyk'

const wszystkie = [
  { id: "1", nazwa: "Fraktalna Rozgrzewka", cena: 7 },
  { id: "2", nazwa: "Remiks Funkcji Jaźni", cena: 9 },
  { id: "3", nazwa: "Archetypiczny Generator Wątków", cena: 12 }
]

export default function Pakiet() {
  const [koszyk, setKoszyk] = useState([])

  const toggle = (prompt) => {
    setKoszyk(prev =>
      prev.find(p => p.id === prompt.id)
        ? prev.filter(p => p.id !== prompt.id)
        : [...prev, prompt]
    )
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Pakiet Promptów™</h1>
      <p className="text-sm text-gray-400 mb-6">Zaznacz prompty, które chcesz kupić w pakiecie. Trzeci i kolejne dają rabat 30% na najtańszy.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {wszystkie.map(p => (
          <label key={p.id} className="bg-gray-800 p-4 rounded-xl cursor-pointer flex flex-col">
            <input type="checkbox" checked={koszyk.find(k => k.id === p.id)} onChange={() => toggle(p)} />
            <span className="font-semibold text-pink-300 mt-2">{p.nazwa}</span>
            <span className="text-sm text-white">{p.cena} PLN</span>
          </label>
        ))}
      </div>
      {koszyk.length > 0 && <PakietKoszyk prompty={koszyk} />}
    </div>
  )
}