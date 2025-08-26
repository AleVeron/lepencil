import Link from 'next/link'

export default function ProductCategories() {
  const categories = [
    {
      id: 1,
      name: 'Terapia Sensorial',
      description: 'Productos para estimular y regular los sentidos',
      image: '🎯',
      count: '25+ productos'
    },
    {
      id: 2,
      name: 'Comunicación',
      description: 'Herramientas para mejorar la comunicación',
      image: '🗣️',
      count: '18+ productos'
    },
    {
      id: 3,
      name: 'Motricidad',
      description: 'Desarrollo de habilidades motoras finas y gruesas',
      image: '🤸',
      count: '22+ productos'
    },
    {
      id: 4,
      name: 'Calma y Relajación',
      description: 'Productos para promover la tranquilidad',
      image: '🧘',
      count: '15+ productos'
    },
    {
      id: 5,
      name: 'Aprendizaje',
      description: 'Materiales educativos especializados',
      image: '📚',
      count: '30+ productos'
    },
    {
      id: 6,
      name: 'Vida Diaria',
      description: 'Productos para rutinas y autonomía',
      image: '🏠',
      count: '20+ productos'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestras categorías especializadas, cada una diseñada para abordar 
            necesidades específicas del desarrollo infantil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/categoria/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-teal-100">
                <div className="text-4xl mb-4">{category.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-teal-600">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-teal-600 font-medium">
                    {category.count}
                  </span>
                  <svg 
                    className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/categorias" 
            className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
          >
            Ver todas las categorías
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
