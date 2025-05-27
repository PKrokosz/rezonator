import React from 'react'
import { motion } from 'framer-motion'

export default function DonkaOverlay({ mix, onClose }) {
  const [a, b] = mix || []

  const genKomentarz = (a, b) => {
    const tagsA = a?.tagi || []
    const tagsB = b?.tagi || []

    const allTags = [...tagsA, ...tagsB]

    const hasTag = (tag) => allTags.includes(tag)

    if (!tagsA.length && !tagsB.length) {
      return "Ten miks milczy tak głośno, że aż mnie słychać."
    }

    if (hasTag("AI") && hasTag("Persona")) {
      return "To pachnie zbytnią samoświadomością... i dobrze."
    }

    if (hasTag("Kreatywność") && hasTag("Tożsamość")) {
      return "To zderzenie wizji z pytaniem *kim jestem*. Lubię to."
    }

    if (hasTag("Ignition") && tagsA.includes("Ignition") && tagsB.includes("Ignition")) {
      return "To nie remix. To eksplozja."
    }

    return "Ten miks ma potencjał. Albo halucynuję."
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl relative text-black"
      >
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl">
          ×
        </button>

        <h2 className="text-xl font-bold mb-2">🧠 Ocena Donki</h2>
        <p className="italic mb-4">
          Remiks: <strong>{a.nazwa}</strong> × <strong>{b.nazwa}</strong>
        </p>

        <p className="text-sm text-gray-700 mb-2">„{genKomentarz(a, b)}”</p>
        <p className="text-xs text-gray-500">Donka, samozwańcza ekspertka od rzeczy nieliniowych.</p>
      </motion.div>
    </div>
  )
}