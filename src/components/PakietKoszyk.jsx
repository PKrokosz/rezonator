export default function PakietKoszyk({ prompty }) {
  const suma = prompty.reduce((acc, p) => acc + p.cena, 0)
  const rabat = prompty.length >= 3 ? Math.min(...prompty.map(p => p.cena)) * 0.3 : 0
  const finalna = Math.round(suma - rabat)

  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl mt-4 shadow-lg">
      <h2 className="text-xl font-bold mb-2">🧮 Twój Pakiet</h2>
      <ul className="text-sm mb-4">
        {prompty.map((p, i) => (
          <li key={i}>– {p.nazwa} ({p.cena} PLN)</li>
        ))}
      </ul>
      <p className="text-sm text-gray-400 mb-1">Suma: {suma} PLN</p>
      <p className="text-sm text-pink-300 mb-2">Rabat: -{Math.round(rabat)} PLN</p>
      <p className="text-lg font-semibold">Do zapłaty: {finalna} PLN</p>
      <button className="mt-4 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded text-white font-semibold">
        Kup pakiet
      </button>
    </div>
  )
}