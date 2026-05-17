import './FinalCTA.css';
import { handlePayment } from '../utils/razorpayPayment';

const FinalCTA = () => {
  const handleRegisterClick = () => {
    handlePayment('link');
  };

  return (
    <section className="final-cta">
      <div className="container">
        <h2 className="cta-headline">आजचा निर्णय उद्याचं निरोगी सुंदर आयुष्य घडवू शकतो</h2>
        <p className="cta-subheadline">स्वतःला जपा आरोग्य जपा</p>
        <div className="cta-info">
          <p className="seats-left">Don't miss out! Offer expires soon.</p>
          <p className="cta-marathi">Join करा सहभागी व्हा ₹199</p>
          <p className="cta-english">Register before seats get full</p>
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
        <div className="cta-center">
          <button
            className="register-btn large"
            onClick={handleRegisterClick}
          >
            मी सहभागी होण्यास तयार आहे - Payment / Join
          </button>
        </div>
        <p className="thank-you">Thank you</p>
      </div>
    </section>
  );
};

export default FinalCTA;

