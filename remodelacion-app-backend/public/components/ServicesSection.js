"use client";

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = ({
  heading = "Nuestros Servicios Expertos",
  services: initialServices = [
    {
      staticImageSrc: "/assets/services/handyman_thumb.jpg", 
      videoSrc: "/videos/services/plomero_toilet.mp4", 
      title: "Handyman Profesional",
      description: "Cambio de toilets, grifos, ventiladores, lámparas y reparaciones eléctricas o de plomería menores."
    },
    {
      staticImageSrc: "/assets/services/shower_thumb.jpg",
      videoSrc: "/videos/services/instalacion_ducha.mp4",
      title: "Shower en 1 Día",
      description: "Reemplazo completo de bañera a regadera o de regadera a regadera. Acabados limpios y profesionales."
    },
    {
      staticImageSrc: "/assets/services/tubs_thumb.jpg",
      videoSrc: "/videos/services/tina_jet.mp4",
      title: "Tinas Walk-In / Hidroterapia",
      description: "Instalación de tinas con puerta, jets, luz y calentador para personas con movilidad limitada."
    }
  ]
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleCardClick = (title) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {initialServices.map((service, index) => (
            <ServiceCard
              key={index}
              staticImageSrc={service.staticImageSrc}
              videoSrc={service.videoSrc}
              title={service.title}
              description={service.description}
              onClick={() => handleCardClick(service.title)}
            />
          ))}
        </div>
      </div>
      
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">Cotiza tu servicio de {selectedService}</h3>
            <p className="text-gray-700 mb-6">Hemos recibido tu interés en este servicio. Por favor, completa nuestro formulario de contacto para recibir un presupuesto exacto y agendar tu cita.</p>
            <a href="#contact" onClick={closeModal} className="w-full text-center inline-block px-8 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors duration-300">
              Ir al Formulario de Contacto
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;