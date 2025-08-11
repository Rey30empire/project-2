import React, { useState } from 'react';

const FAQItem = ({
  question = "¿Qué magia hacen en mi casa?",
  answer = "Hacemos de todo, desde arreglos pequeños hasta transformar tu baño en un spa de lujo. ¡Pregúntanos lo que sea!"
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2 border-purple-300 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-2xl font-extrabold text-gray-900 focus:outline-none group"
        onClick={toggleOpen}
      >
        {question}
        <svg
          className={`w-8 h-8 text-purple-600 transform transition-transform duration-300 group-hover:scale-125 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-700 leading-relaxed text-lg animate-fade-in">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;