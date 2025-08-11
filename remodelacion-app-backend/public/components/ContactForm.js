import React, { useState } from 'react';

const ContactForm = ({
  heading = "¡Contáctanos y Haz Realidad tu Proyecto! 📞",
  subheading = "Tienes una pregunta o necesitas un presupuesto? Rellena el formulario y te responderemos más rápido que un rayo."
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto. 🎉');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-400 to-orange-500">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold text-white text-center mb-6 drop-shadow-lg">{heading}</h2>
        <p className="text-xl text-white text-center mb-12 opacity-90">{subheading}</p>
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-2xl border-4 border-yellow-300">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 text-lg font-bold mb-2">Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-gray-100 border-2 border-purple-300 rounded-xl shadow-inner focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-300 text-lg"
              placeholder="Tu Nombre Aquí"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-800 text-lg font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-gray-100 border-2 border-purple-300 rounded-xl shadow-inner focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-300 text-lg"
              placeholder="tu@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-800 text-lg font-bold mb-2">Teléfono (Opcional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-gray-100 border-2 border-purple-300 rounded-xl shadow-inner focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-300 text-lg"
              placeholder="Tu Número de Teléfono"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-800 text-lg font-bold mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="7"
              className="w-full px-5 py-3 bg-gray-100 border-2 border-purple-300 rounded-xl shadow-inner focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-300 resize-none text-lg"
              placeholder="Cuéntanos sobre tu proyecto o pregunta..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-bold text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 transform transition-all duration-300 hover:scale-105 shadow-2xl w-full"
          >
            <span className="relative px-8 py-4 transition-all ease-out duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
              ¡Enviar Mensaje! 💌
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;