import DonnaMessage from '../components/DonnaMessage'

const news = [
  {
    title: "OpenAI uruchamia Sora",
    body: "Model video-text zmienia zasady gry. Donka mówi: 'To nie montaż. To transkrypcja przyszłości.'",
    source: "AI Update"
  },
  {
    title: "Claude 3.5 pokonuje GPT-4",
    body: "Nowy model od Anthropic wygrywa benchmarki. Donka: 'Benchmark nie zna serca. Ale zna liczby.'",
    source: "Benchmarking Weekly"
  },
  {
    title: "Luna – lokalna AI z prądem",
    body: "Lokalna instancja z REMOR-em i MEMORA™ staje się hubem wiedzy. Donka: 'Zbudowaliśmy rezonans, nie bota.'",
    source: "REZONATOR™ Internal"
  }
]

export default function DonnaNews() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">🗞️ Donna News™</h1>
      <p className="text-sm text-gray-400 mb-6">Komentarze Donki do najnowszych wydarzeń ze świata AI.</p>
      {news.map((n, i) => (
        <DonnaMessage key={i} title={n.title} body={n.body} source={n.source} />
      ))}
    </div>
  )
}