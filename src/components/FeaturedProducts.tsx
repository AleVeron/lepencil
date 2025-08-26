import Link from 'next/link'

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Kit Sensorial Táctil',
      description: 'Conjunto de texturas variadas para estimulación sensorial',
      price: '$35.000',
      originalPrice: '$42.000',
      image: '🎨',
      category: 'Terapia Sensorial',
      featured: true
    },
    {
      id: 2,
      name: 'Tablero de Comunicación Visual',
      description: 'Sistema PECS para mejorar la comunicación',
      price: '$28.000',
      image: '📋',
      category: 'Comunicación'
    },
    {
      id: 3,
      name: 'Pelota de Equilibrio Terapéutica',
      description: 'Para desarrollo de equilibrio y coordinación',
      price: '$45.000',
      image: '⚽',
      category: 'Motricidad'
    },
    {
      id: 4,
      name: 'Lámpara de Proyección Calmante',
      description: 'Proyecta patrones relajantes para la hora de dormir',
      price: '$52.000',
      image: '💡',
      category: 'Calma y Relajación'
    }
  ]

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Productos Destacados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros productos más populares, seleccionados por especialistas 
            en desarrollo infantil y recomendados por familias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                {product.featured && (
                  <div className="bg-teal-600 text-white text-sm font-medium px-3 py-1 inline-block">
                    ⭐ Destacado
                  </div>
                )}
                
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{product.image}</div>
                  
                  <div className="mb-2">
                    <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded-full font-medium">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-teal-600">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-800">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-teal-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                      Agregar al carrito
                    </button>
                    <Link 
                      href={`/producto/${product.id}`}
                      className="p-2 border border-gray-200 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/productos" 
            className="inline-flex items-center bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors shadow-lg"
          >
            Ver todos los productos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
