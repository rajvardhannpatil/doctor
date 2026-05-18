import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is the sessions live or recorded?",
      answer: "It's a live course conducted on zoom."
    },
    {
      question: "Do I get recording of sessions?",
      answer: "No, this is live course."
    },
    {
      question: "Do I get a refund if I am not able to join the class?",
      answer: "No refunds are not available."
    },
    {
      question: "If any problem regarding payment or workshop whom can I ask or talk to about it?",
      answer: "Contact or text on this number - 9307631817"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-leaf faq-leaf-left" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>
      <div className="faq-leaf faq-leaf-right" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>

      <div className="container">
        <div className="faq-heading">
          <p>Need Help?</p>
          <h2 className="section-headline">
            <span>Frequently Asked</span>
            <span>Questions</span>
          </h2>
          <div className="faq-divider" aria-hidden="true">
            <span></span>
            <svg viewBox="0 0 24 24">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
              <path d="M9 22v-4h4" />
            </svg>
            <span></span>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

