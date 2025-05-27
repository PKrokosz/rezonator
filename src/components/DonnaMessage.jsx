export default function DonnaMessage({ title, body, source }) {
  return (
    <div className="bg-[#1e1b2e] border border-pink-800 p-5 rounded-xl shadow-md text-white space-y-2 mb-6">
      <h2 className="text-xl font-bold text-pink-300">📰 {title}</h2>
      <p className="text-sm text-gray-200">{body}</p>
      <div className="text-xs text-right text-pink-500 italic">Źródło: {source}</div>
    </div>
  )
}