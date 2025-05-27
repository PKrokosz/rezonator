import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Promptownia from './pages/Promptownia'
import Promptownia2 from './pages/Promptownia2'
import RemixEngine from './pages/RemixEngine'
import Pakiet from './pages/Pakiet'
import DonnaNews from './pages/DonnaNews'
import Zin from './pages/Zin'
import Navbar from './components/Navbar'
import './index.css'
import MapaSystemow from './pages/MapaSystemow'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/promptownia" element={<Promptownia />} />
        <Route path="/promptownia2" element={<Promptownia2 />} />
        <Route path="/remix" element={<RemixEngine />} />
        <Route path="/pakiet" element={<Pakiet />} />
        <Route path="/donna-news" element={<DonnaNews />} />
        <Route path="/zin" element={<Zin />} />
        <Route path="/systemy" element={<MapaSystemow />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
