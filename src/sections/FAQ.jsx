import { useState } from 'react';
import { faqData } from '../data/faqData';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="faq-item bg-white rounded-2xl shadow-lg overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-navy">{question}</span>
        <i className={`fas fa-chevron-down text-amber transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`px-6 pb-6 transition-all duration-400 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p className="text-navy/70">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 px-6 bg-ivory relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-4 block">FAQ</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">Find answers to common questions about your stay at AM2PM HOTEL & SUITES AUTOGRAPH.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;