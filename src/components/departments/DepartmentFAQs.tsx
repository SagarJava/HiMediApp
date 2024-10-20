import React from 'react';
import './DepartmentFAQs.css';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQsProps {
  faqs: FAQ[];
}

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
  return (
    <div className="faqs">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
