import './Bonuses.css';
import { handlePayment } from '../utils/razorpayPayment';

const Bonuses = () => {
  const handleRegisterClick = () => {
    handlePayment('link');
  };
  const bonuses = [
    {
      title: "Gut-Mind health मजबूत करण्यासाठीचे Daily morning routine Guide-PDF ",
      worth: "Worth 500/- now free"
    },
    {
      title: "Powerful Activities for Gut-Mind-Body health Guide-PDF",
      worth: "Worth 1000/- now free "
    },
    {
      title: "Night healing routine पचन सुधारणा व मन शांती करण्यासाठी Guide-PDF",
      worth: "Worth 500/- now free"
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
        या वर्कशॉप मध्ये आत्ता लगेच सहभागी व्हा आणि मिळवा 2000/- किमतीचे खालील Bonuses पूर्णपणे फ्री (मोफत)
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
        वरील 2000/- किमतीचे bonuse Guides फ्री मध्ये मिळवण्यासाठी join now वरती क्लिक करा 199 पे करून या ग्रेट वोर्कशॉप मध्ये सहभागी व्हा.
        </p>
        <p className="bonus-note">
        ( ही ऑफर लिमिटेड आहे फायदा घ्या आणि जॉईन करा )
        </p>
        <div className="cta-center">
          <button className="register-btn large" onClick={handleRegisterClick}>Join now-only 199 Rs</button>
        </div>
        <p className="whatsapp-note">
          पेमेंट झाल्यानंतर आमच्या व्हाट्सअप ग्रुपला जॉईन करा
        </p>
      </div>
    </section>
  );
};

export default Bonuses;

