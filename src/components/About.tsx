export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Cada niño es único, cada necesidad es especial
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En Le Pencil creemos que cada niño merece las herramientas adecuadas para 
              desarrollar su máximo potencial. Nos especializamos en productos cuidadosamente 
              seleccionados para niños con autismo, TDAH y otras necesidades especiales.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Trabajamos directamente con terapeutas ocupacionales, especialistas en desarrollo 
              infantil y familias para ofrecer productos que realmente marcan la diferencia.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800 mb-1">Especializado</h3>
                <p className="text-sm text-gray-600">Productos específicos para necesidades especiales</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🤝</div>
                <h3 className="font-semibold text-gray-800 mb-1">Respaldo Profesional</h3>
                <p className="text-sm text-gray-600">Avalado por terapeutas y especialistas</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💚</div>
                <h3 className="font-semibold text-gray-800 mb-1">Compromiso Social</h3>
                <p className="text-sm text-gray-600">Parte de las ganancias apoya investigación</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-600 text-white p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Calidad Garantizada</h3>
                  <p className="text-gray-600 text-sm">Todos nuestros productos pasan por rigurosos controles de calidad y seguridad.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-600 text-white p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Envío Rápido</h3>
                  <p className="text-gray-600 text-sm">Entendemos la urgencia. Enviamos en 24-48 horas en área metropolitana.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-600 text-white p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Asesoramiento Personalizado</h3>
                  <p className="text-gray-600 text-sm">Nuestro equipo te ayuda a encontrar el producto perfecto para cada niño.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
