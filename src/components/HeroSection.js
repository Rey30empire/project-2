import React from 'react';

const HeroSection = ({
  heading = "¡Transformamos tu Hogar en un Sueño Hecho Realidad! 🏡✨",
  subheading = "En Top Notch Remodeling LLC, convertimos tus ideas en espacios impresionantes. Expertos en diseño, renovación y construcción, comprometidos con la excelencia y tu satisfacción.",
}) => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 to-purple-900 text-white min-h-[85vh] flex items-center justify-center overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-pattern-light opacity-10 dark:opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-fade-in-down">
          {heading}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200 drop-shadow-md animate-fade-in-up delay-200">
          {subheading}
        </p>

        {/* Este es el div con los 3 botones de contacto */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          {/* Botón para llamar */}
          <a
            href="tel:+19725330634"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-bold text-gray-900 rounded-full group bg-gradient-to-br from-blue-500 to-indigo-600 group-hover:from-blue-500 group-hover:to-indigo-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 transform transition-all duration-300 hover:scale-105 shadow-2xl px-6 py-3"
          >
            <span className="relative px-6 py-2.5 transition-all ease-out duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 flex items-center">
              📞 Llámanos
            </span>
          </a>

          {/* Botón para WhatsApp */}
          <a
            href="https://wa.me/19725330634?text=Hola,%20me%20interesa%20un%20presupuesto%20para%20remodelación."
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-bold text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-green-600 group-hover:from-green-400 group-hover:to-green-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 transform transition-all duration-300 hover:scale-105 shadow-2xl px-6 py-3"
          >
            <span className="relative px-6 py-2.5 transition-all ease-out duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 flex items-center">
              📱 WhatsApp
            </span>
          </a>

          {/* Botón para Correo Electrónico */}
          <a
            href="mailto:Rey30empire@gmail.com?subject=Solicitud de Presupuesto - Sitio Web"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-bold text-gray-900 rounded-full group bg-gradient-to-br from-red-500 to-orange-600 group-hover:from-red-500 group-hover:to-orange-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 transform transition-all duration-300 hover:scale-105 shadow-2xl px-6 py-3"
          >
            <span className="relative px-6 py-2.5 transition-all ease-out duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 flex items-center">
              ✉️ Correo
            </span>
          </a>
        </div>
      </div>
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-300" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;