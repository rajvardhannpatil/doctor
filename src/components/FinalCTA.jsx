import './FinalCTA.css';
import { handlePayment } from '../utils/razorpayPayment';

const FinalCTA = () => {
  const handleRegisterClick = () => {
    handlePayment('link');
  };

  return (
    <section className="final-cta">
      <div className="final-leaf final-leaf-left" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>
      <div className="final-leaf final-leaf-right" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>

      <div className="container">
        <div className="final-hero-card">
          <p className="final-eyebrow">Final Step</p>
          <h2 className="cta-headline">आजचा निर्णय उद्याचं निरोगी सुंदर आयुष्य घडवू शकतो</h2>
          <div className="final-divider" aria-hidden="true">
            <span></span>
            <svg viewBox="0 0 24 24">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
              <path d="M9 22v-4h4" />
            </svg>
            <span></span>
          </div>
          <p className="cta-subheadline">स्वतःला जपा आरोग्य जपा</p>
          <div className="cta-info">
            <p className="seats-left">Don't miss out! Offer expires soon.</p>
            <p className="cta-marathi">Join करा सहभागी व्हा <strong>₹199</strong></p>
            <p className="cta-english">Register before seats get full</p>
          </div>

          <div className="cta-center">
            <button
              className="register-btn large"
              onClick={handleRegisterClick}
            >
              मी सहभागी होण्यास तयार आहे - Payment / Join
            </button>
          </div>
        </div>

        <div className="disclaimer-section">
          <div className="disclaimer-box">
            <h3 className="disclaimer-title">Important Disclaimer</h3>
            <div className="disclaimer-text">
              <p>This Workshop is conducted solely for educational, informational, and awareness purposes. The information, guidance shared in this workshop are not a substitute for medical treatment.</p>
              <p>Results from this workshop may vary from person to person. No assurance are made regarding diagnosis, treatment, cure, or specific outcomes.</p>
              <p>Participation in this workshop and the application of the information provided are entirely at the participant's own discretion and responsibility.</p>
              <p>The purpose of this workshop is to support gut health improvement, mental clarity, positive lifestyle changes, and increased self-awareness.</p>
            </div>
            <p className="disclaimer-point">
              • I confirm that I have read, understood, and agreed to participate
            </p>
          </div>
        </div>

        <div className="cta-message-box"> 
          <p>आमचा प्रयत्न तुम्हाला योग्य आणि सोप्या पद्धतीने मदत करण्याचा आहे, ज्यामुळे तुमच्या आरोग्यात सकारात्मक बदल घडतील.</p>
          <p>स्वतःवर विश्वास ठेवा, तुमच्यात ती क्षमता आहे आणि तुम्ही हे स्वतःच्या आरोग्य साठी करू शकता; या प्रवासात आमची साथ तुम्हाला नक्कीच मिळेल</p>
        </div>
        <p className="thank-you">Thank you</p>
      </div>
    </section>
  );
};

export default FinalCTA;

