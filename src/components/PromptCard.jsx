export default function PromptCard({ prompt, onAdd }) {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-md flex flex-col gap-2">
      <h2 className="text-xl font-bold text-pink-300">{prompt.nazwa}</h2>
      <p className="text-sm text-gray-300">{prompt.opis}</p>
      <span className="text-xs bg-pink-800 text-white rounded px-2 py-1 w-fit">{prompt.tag}</span>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-lg font-semibold text-white">{prompt.cena} PLN</span>
        <button onClick={() => onAdd(prompt)} className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200">
          Dodaj
        </button>
      </div>
    </div>
  )
}