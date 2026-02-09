import './Bonuses.css';
import { handlePayment } from '../utils/razorpayPayment';

const Bonuses = () => {
  const handleRegisterClick = () => {
    handlePayment('link');
  };
  const bonuses = [
    {
      title: "Gut & Mind Strengthen 10 Minute Morning Routine Guide - PDF",
      worth: "Free Bonus"
    },
    {
      title: "Powerful Activities for Gut - Mind & Body Guide - PDF",
      worth: "Free Bonus"
    },
    {
      title: "Dr. Akash Holistic 15 Gut-Mind Body Health Community Access",
      worth: "Free Bonus"
    }
  ];

  return (
    <section className="bonuses">
      <div className="container">
        <p className="investment-quote">आरोग्य हा खर्च नाही तर आयुष्याची सर्वोत्तम गुंतवणूक आहे</p>
        <div className="pricing-info">
          <p className="pricing-text">Workshop फी इतर दिवशी ₹499</p>
          <p className="pricing-highlight">आता फक्त ₹199 मध्ये प्रवेश मिळवा आणि + 3 bonus free</p>
        </div>
        <h2 className="section-headline">
          Grab these Amazing BONUSES when you Register Now!!
        </h2>
        <div className="bonuses-grid">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bonus-item">
              <div className="bonus-icon">🎁</div>
              <h3>{bonus.title}</h3>
              <p className="bonus-worth">{bonus.worth}</p>
            </div>
          ))}
        </div>
        <p className="bonus-note">
          खालील बटनावरती क्लिक करा आणि ₹199 पे करून लगेच तुमची जागा निश्चित करा
        </p>
        <div className="cta-center">
          <button className="register-btn large" onClick={handleRegisterClick}>Reserve my seat @ ₹199</button>
        </div>
        <p className="whatsapp-note">
          पेमेंट झाल्यानंतर आमच्या व्हाट्सअप ग्रुपला जॉईन करा
        </p>
      </div>
    </section>
  );
};

export default Bonuses;

