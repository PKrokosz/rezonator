import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex gap-6 shadow-lg">
      <Link to="/">REZONATOR™</Link>
      <Link to="/promptownia">Promptownia</Link>
      <Link to="/remix">Remix</Link>
      <Link to="/pakiet">Pakiet</Link>
      <Link to="/donna-news">Donna News</Link>
      <Link to="/zin">ZIN</Link> {/* ⬅️ tu */}
    </nav>
  )
}
