import './Bonuses.css';
import { handlePayment } from '../utils/razorpayPayment';
import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import m3 from '../assets/m3.png';
import specialoff from '../assets/specialof.png';

const Bonuses = () => {
  const handleRegisterClick = () => {
    handlePayment('link');
  };
  const bonuses = [
    {
      title: "Gut-Mind health मजबूत करण्यासाठीचे Daily morning routine Guide-PDF ",
      originalWorth: "Worth 500/-",
      image: m1
    },
    {
      title: "Powerful Activities for Gut-Mind-Body health Guide-PDF",
      originalWorth: "Worth 1000/-",
      image: m2
    },
    {
      title: "Night healing routine पचन सुधारणा व मन शांती करण्यासाठी Guide-PDF",
      originalWorth: "Worth 500/-",
      image: m3
    }
  ];

  return (
    <section className="bonuses">
      <div className="container">
        <p className="investment-quote">आरोग्य हा खर्च नाही तर आयुष्याची सर्वोत्तम गुंतवणूक आहे</p>
        <div className="pricing-info">
          <p className="pricing-text">Workshop प्रवेश  फी इतर दिवशी ₹999</p>
          <p className="pricing-highlight">आता फक्त ₹199 मध्ये प्रवेश मिळवा आणि + 3 bonus free</p>
        </div>
        <div className="special-offer-container">
          <img src={specialoff} alt="Special Offer" className="special-offer-img" />
        </div>  
        <h2 className="section-headline">
          या वर्कशॉप मध्ये आत्ता लगेच सहभागी व्हा आणि मिळवा 2000/- किमतीचे खालील Bonuses पूर्णपणे फ्री (मोफत)
        </h2>
        <div className="bonuses-grid">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bonus-item">
              <div className="bonus-icon">
                <img src={bonus.image} alt={bonus.title} className="bonus-img" />
              </div>
              <h3>{bonus.title}</h3>
              <div className="bonus-worth-container">
                <span className="bonus-worth">{bonus.originalWorth}</span>
                <span className="free-badge">FREE</span>
              </div>
            </div>
          ))}
        </div>
        <p className="bonus-note">
          वरील 2000/- किमतीचे bonuse Guides फ्री मध्ये मिळवण्यासाठी join now वरती क्लिक करा 199 पे करून या ग्रेट वोर्कशॉप मध्ये सहभागी व्हा.
        </p>
        <p className="bonus-note bonus-note-bold">
          Limited time for free bonuse
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

