"use client";
import { useState } from 'react';

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    { question: "What is EthAi?", answer: "EthAi is..." },
    { question: "How can EthAi help me as a Trader?", answer: "EthAi can help by..." },
    { question: "Who can use EthAi?", answer: "Any trader or..." },
    { question: "How does EthAi track smart money flow?", answer: "By using advanced..." },
    { question: "How does EthAi ensure data security?", answer: "EthAi employs..." },
  ];

  return (
    <div className="bg-darkBlue text-white py-10 px-4 sm:px-20">
      <h2 className="text-2xl sm:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left flex justify-between items-center py-4 text-lg sm:text-xl font-medium"
            >
              {faq.question}
              <span className="text-xl sm:text-2xl">{openQuestion === index ? '-' : '+'}</span>
            </button>
            {openQuestion === index && (
              <div className="text-base sm:text-lg text-gray-400 pb-4">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
