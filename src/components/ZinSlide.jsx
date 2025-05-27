export default function ZinSlide({ data }) {
  return (
    <div className="bg-[#1f1a2e] border border-pink-700 rounded-xl p-6 mb-8 text-white shadow-xl">
      <img src={data.obraz} alt="zin" className="rounded w-full mb-4 border border-pink-900"/>
      <blockquote className="text-lg italic text-pink-200">„{data.dialog}”</blockquote>
      <p className="mt-2 text-sm text-pink-400">— {data.komentarzDonki}</p>
    </div>
  )
}