export default function RemixBox({ remix }) {
  return (
    <div className="bg-blue-900 p-6 rounded-xl text-white mt-6 shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold mb-2">🔀 {remix.nazwa}</h2>
      <p className="mb-2 italic text-pink-200">„{remix.komentarz}”</p>
      <div className="flex justify-between items-center text-sm text-gray-300">
        <span>Mnożnik poznawczy: <strong>x{remix.mnoznik}</strong></span>
        <span>Cena remixu: <strong>{remix.cena} PLN</strong></span>
      </div>
    </div>
  )
}