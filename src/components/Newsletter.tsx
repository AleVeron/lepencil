'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para suscribir al newsletter
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail('')
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border border-teal-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Únete a nuestra comunidad de familias conectadas
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Recibe recursos útiles, consejos de especialistas, ofertas exclusivas y 
            las últimas novedades en productos para el desarrollo infantil.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                disabled={isSubmitted}
              />
              <button
                type="submit"
                disabled={isSubmitted}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-teal-600 text-white hover:bg-teal-700'
                }`}
              >
                {isSubmitted ? '¡Suscrito!' : 'Suscribirme'}
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Solo contenido valioso, sin spam. Puedes cancelar tu suscripción en cualquier momento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-teal-600 text-white p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Recursos educativos</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-teal-600 text-white p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Ofertas exclusivas</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-teal-600 text-white p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">Novedades primero</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
