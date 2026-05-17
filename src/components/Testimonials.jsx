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
      <div className="container">
        <h2 className="section-headline">
          Look what our happy participates are saying about workshops
        </h2>
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={goToPrevious}>
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
          <button className="carousel-button next" onClick={goToNext}>
            ›
          </button>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
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

