export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      role: 'Mamá de Santiago (7 años, TEA)',
      content: 'Los productos de Le Pencil han sido fundamentales en el desarrollo de Santiago. El kit sensorial le ha ayudado muchísimo con su autorregulación. La calidad es excepcional y se nota que están pensados específicamente para nuestros niños.',
      rating: 5
    },
    {
      id: 2,
      name: 'Dr. Carlos Méndez',
      role: 'Terapeuta Ocupacional',
      content: 'Como profesional, recomiendo constantemente los productos de Le Pencil a las familias que atiendo. La selección es excelente y realmente funcionan. Es evidente el conocimiento especializado detrás de cada producto.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      role: 'Mamá de gemelos con TDAH',
      content: 'Encontrar productos adecuados para mis hijos siempre fue un desafío hasta que conocí Le Pencil. El servicio al cliente es increíble, siempre dispuestos a asesorar y encontrar la mejor solución para cada necesidad.',
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lo que dicen las familias que confían en nosotros
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonios reales de familias y profesionales que han encontrado 
            en nuestros productos el apoyo que necesitaban.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-teal-600 font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-teal-100">
            <h3 className="font-semibold text-gray-800 mb-2">¿Quieres compartir tu experiencia?</h3>
            <p className="text-gray-600 mb-4">
              Tu testimonio puede ayudar a otras familias a encontrar las herramientas que necesitan.
            </p>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-700 transition-colors">
              Compartir mi historia
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
