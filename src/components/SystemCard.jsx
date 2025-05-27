export default function SystemCard({ name, description }) {
  return (
    <div className="bg-[#111] text-white border border-blue-600 rounded-xl p-4 shadow-md hover:scale-[1.01] transition">
      <h2 className="text-xl font-bold text-blue-300 mb-2">{name}</h2>
      <p className="text-sm text-gray-300">{description}</p>
      <button className="mt-3 px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm">Wejdź do systemu</button>
    </div>
  )
}