import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is Toolscape?',
      answer:
        'Toolscape is a platform that offers a variety of AI-powered tools, including image generation, icon generation, PDF generation, video generation, background generation, background removal, and more.',
    },
    {
      question: 'How do I use the AI tools?',
      answer:
        'To use the AI tools, simply navigate to the respective tool from the Features dropdown in the navbar. Each tool has a user-friendly interface where you can upload your content or select options to generate the desired output.',
    },
    {
      question: 'Are the AI tools free to use?',
      answer:
        'Toolscape offers both free and premium versions of its tools. Free versions have basic features, while the premium versions offer advanced features for professional use.',
    },
    {
      question: 'What formats are supported for image generation?',
      answer:
        'Toolscape supports various image formats, including PNG, JPEG, and SVG. Different tools may have specific format requirements, which will be clearly indicated in the respective tool’s instructions.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'You can contact our customer support team via email at support@toolscape.com or by filling out the contact form on the website.',
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
