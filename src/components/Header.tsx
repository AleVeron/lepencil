'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-teal-600">
              Le Pencil
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium">
              Inicio
            </Link>
            <Link href="/productos" className="text-gray-700 hover:text-teal-600 font-medium">
              Productos
            </Link>
            <Link href="/categorias" className="text-gray-700 hover:text-teal-600 font-medium">
              Categorías
            </Link>
            <Link href="/sobre-nosotros" className="text-gray-700 hover:text-teal-600 font-medium">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-teal-600 font-medium">
              Contacto
            </Link>
          </nav>

          {/* Cart & Account */}
          <div className="flex items-center space-x-4">
            <Link href="/carrito" className="text-gray-700 hover:text-teal-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19" />
              </svg>
            </Link>
            <Link href="/cuenta" className="text-gray-700 hover:text-teal-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-teal-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">
                Inicio
              </Link>
              <Link href="/productos" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">
                Productos
              </Link>
              <Link href="/categorias" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">
                Categorías
              </Link>
              <Link href="/sobre-nosotros" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">
                Sobre Nosotros
              </Link>
              <Link href="/contacto" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
