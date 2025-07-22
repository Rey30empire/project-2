import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = ({
  heading = "Frequently Asked Questions",
  faqs = [
    {
      question: "How long does a one-day shower installation take?",
      answer: "Our one-day shower installations are typically completed within a single working day, minimizing disruption to your home. The exact time can vary based on complexity, but we aim for efficiency."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we offer free, no-obligation estimates for all our services. Contact us today to schedule yours!"
    },
    {
      question: "Are your services insured?",
      answer: "Absolutely. TopNotch Remodeling LLC is fully licensed and insured for your peace of mind. Our team consists of experienced and qualified professionals."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve [Your Service Area, e.g., Springfield, IL and surrounding communities]. Please contact us to confirm if we cover your specific location."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including major credit cards, bank transfers, and personal checks. Details will be provided during the estimation process."
    }
  ]
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">{heading}</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

// DONE