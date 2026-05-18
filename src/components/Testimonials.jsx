import { useState, useEffect } from 'react';
import './Testimonials.css';
import { handlePayment } from '../utils/razorpayPayment';
import testimonial1 from '../assets/r1.jpeg';
import testimonial2 from '../assets/r2.jpeg';
import testimonial3 from '../assets/r3.jpeg';
import testimonial4 from '../assets/r4.jpeg';
import testimonial5 from '../assets/r5.jpeg';
import testimonial6 from '../assets/r6.jpeg';

const Testimonials = () => {
  const testimonials = [
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
    testimonial5,
    testimonial6
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <div className="testimonial-leaf testimonial-leaf-left" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>
      <div className="testimonial-leaf testimonial-leaf-right" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>

      <div className="container">
        <div className="testimonials-heading">
          <p>Workshop Reviews</p>
          <h2 className="section-headline">
            <span>Look what our happy participants</span>
            <span>are saying about workshops</span>
          </h2>
          <div className="testimonials-divider" aria-hidden="true">
            <span></span>
            <svg viewBox="0 0 24 24">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
              <path d="M9 22v-4h4" />
            </svg>
            <span></span>
          </div>
        </div>

        <div className="carousel-container">
          <button className="carousel-button prev" onClick={goToPrevious} aria-label="Previous testimonial">
            ‹
          </button>
          <div className="carousel-wrapper">
            <div className="carousel-slides">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                >
                  <img 
                    src={testimonial} 
                    alt={`Participant testimonial ${index + 1}`}
                    className="testimonial-img"
                  />
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-button next" onClick={goToNext} aria-label="Next testimonial">
            ›
          </button>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
        <div className="cta-center">
          <button 
            className="register-btn" 
            onClick={() => handlePayment('link')}
          >
            मी सहभागी होण्यास तयार आहे - Payment / Join
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

