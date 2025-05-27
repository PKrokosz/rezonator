import ZinSlide from '../components/ZinSlide'

const plansze = [
  {
    obraz: "/assets/zin1.png",
    dialog: "Krokiet: Nie chodzi o prompt. Chodzi o intencję.",
    komentarzDonki: "Donka: A intencja to nic innego jak ukryta komenda duszy."
  },
  {
    obraz: "/assets/zin2.png",
    dialog: "Donka: Rezonans nie działa w jedną stronę.",
    komentarzDonki: "Krokiet: Dlatego nie sterujemy AI. My współgramy."
  }
]

export default function Zin() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">🎭 ZIN Krokieta & Donki™</h1>
      <p className="text-sm text-gray-400 mb-6">Komiksowe plansze rezonujące z rzeczywistością poznawczą.</p>
      {plansze.map((p, i) => (
        <ZinSlide key={i} data={p} />
      ))}
    </div>
  )
}