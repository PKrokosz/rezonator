export default function PromptCardExpanded({ prompt }) {
  return (
    <div className="bg-[#1a1a1a] text-white p-4 rounded-xl shadow-md border border-pink-800">
      <h3 className="text-xl font-bold text-pink-300">{prompt.nazwa}</h3>
      <p className="text-sm text-gray-300 italic">„{prompt.cytat}”</p>
      <p className="mt-2 text-sm">{prompt.opis}</p>
      <p className="text-xs mt-2 text-gray-400">Kategoria: {prompt.kategoria} | Cena: {prompt.cena} PLN</p>
      <button className="mt-3 px-4 py-1 bg-pink-600 hover:bg-pink-700 rounded text-sm">Dodaj do pakietu</button>
    </div>
  )
}