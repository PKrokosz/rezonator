import { useEffect, useState } from 'react'
import PromptCard from '../components/PromptCard'

export default function Promptownia() {
  const [prompty, setPrompty] = useState([])

  useEffect(() => {
    fetch('/src/data/prompty.json')
      .then(res => res.json())
      .then(data => setPrompty(data))
  }, [])

  const handleAdd = (prompt) => {
    alert(`Dodano: ${prompt.nazwa}`)
  }

  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {prompty.map(prompt => (
        <PromptCard key={prompt.id} prompt={prompt} onAdd={handleAdd} />
      ))}
    </div>
  )
}