import React from 'react';

const LayoutFooter = ({
  companyName = "TopNotch Remodeling LLC",
  year = new Date().getFullYear(),
  contactEmail = "Rey30empire@gmail.com",
  phoneNumber = "(972) 5330634"
}) => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner-xl">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <p className="text-2xl font-extrabold drop-shadow-md">{companyName} 💎</p>
          <p className="text-md text-gray-400 mt-2">¡Tu socio de confianza para transformaciones espectaculares!</p>
        </div>
        <div className="mb-8 space-y-2">
          <p className="text-lg">Email: <a href={`mailto:${contactEmail}`} className="text-blue-300 hover:text-blue-100 transition-colors font-medium">{contactEmail}</a></p>
          <p className="text-lg">Teléfono: <a href={`tel:${phoneNumber}`} className="text-blue-300 hover:text-blue-100 transition-colors font-medium">{phoneNumber}</a></p>
        </div>
        <div className="border-t border-gray-700 pt-8 text-sm text-gray-500">
          &copy; {year} {companyName}. Todos los derechos reservados. ✨
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;