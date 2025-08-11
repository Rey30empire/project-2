  import React from 'react';
import LayoutHeader from '@/components/LayoutHeader';
import LayoutFooter from '@/components/LayoutFooter';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
// import '@/styles.css'; // Comentamos esta línea para evitar el error de importación

// Componente principal de la página
export default function Home() {
  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Preguntas Frecuentes', href: '#faq' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <div className="App">
      <LayoutHeader
        title="Remodelación de primera categoría LLC"
        navItems={navItems}
      />

      <main>
        <div id="home"><HeroSection /></div>
        <div id="services"><ServicesSection /></div>
        <div id="testimonials"><TestimonialsSection /></div>
        <div id="projects"><ProjectsGallery /></div>
        <div id="faq"><FAQSection /></div>
        <div id="contact"><ContactForm /></div>
      </main>

      <LayoutFooter companyName="Remodelación de primera categoría LLC" />
    </div>
  );
}