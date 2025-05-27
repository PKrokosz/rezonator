import SystemCard from '../components/SystemCard'

const SYSTEMY = [
  {
    name: "REMOR™",
    description: "System bifurkacji epistemicznej. Odczytuje sens poprzez filtrację rdzeni poznawczych."
  },
  {
    name: "MEMORA™",
    description: "Rezonator archetypiczno-emocjonalny. Pracuje na mapach znaczeń i strukturach fabularnych."
  },
  {
    name: "HERMES™",
    description: "Heurystyczny Eksplorator Realności. Tworzy nowe ścieżki rozumienia i reorganizacji systemów."
  },
  {
    name: "D.Ż.E.M.™",
    description: "Detektor Żaru Emocjonalno-Motywacyjnego. Analizuje głębię zaangażowania poznawczego."
  }
]

export default function MapaSystemow() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-4">🧭 Mapa Systemów REZONATORA™</h1>
      <p className="text-sm text-gray-400 mb-6">Wybierz jeden z systemów, aby eksplorować jego funkcje, remixy i zasady działania.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {SYSTEMY.map((s, i) => (
          <SystemCard key={i} name={s.name} description={s.description} />
        ))}
      </div>
    </div>
  )
}