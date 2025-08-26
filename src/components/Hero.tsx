import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Productos especiales para
            <span className="text-teal-600 block">niños únicos</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra colección cuidadosamente seleccionada de productos diseñados 
            para apoyar el desarrollo y bienestar de niños con autismo y necesidades especiales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/productos" 
              className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition-colors shadow-lg"
            >
              Explorar Productos
            </Link>
            <Link 
              href="/sobre-nosotros" 
              className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-colors"
            >
              Conocer más
            </Link>
          </div>

          {/* Announcement banner */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto border border-teal-100">
            <p className="text-teal-700 font-medium">
              🚚 Envío gratuito en compras mayores a $50.000
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
