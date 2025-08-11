"use client";

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = ({
  heading = "Nuestros Servicios Expertos",
  services: initialServices = [
    {
      staticImageSrc: "/images/services/handyman_thumb.jpg", 
      videoSrc: "/videos/services/handyman_video.mp4", 
      title: "Handyman Profesional",
      description: "Cambio de toilets, grifos, ventiladores, lámparas y reparaciones eléctricas o de plomería menores."
    },
    {
      staticImageSrc: "/images/services/shower_thumb.jpg",
      videoSrc: "/videos/services/shower_video.mp4",
      title: "Shower en 1 Día",
      description: "Reemplazo completo de bañera a regadera o de regadera a regadera. Acabados limpios y profesionales."
    },
    {
      staticImageSrc: "/images/services/tub_thumb.jpg",
      videoSrc: "/videos/services/tubs_video.mp4",
      title: "Tinas Walk-In / Hidroterapia",
      description: "Instalación de tinas con puerta, jets, luz y calentador para personas con movilidad limitada."
    }
  ]
}) => {
  const handleCardClick = (title) => {
    alert(`Has hecho clic en el servicio: ${title}. Un experto te contactará para agendar una cita y darte una cotización.`);
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
    </section>
  );
};

export default ServicesSection;
