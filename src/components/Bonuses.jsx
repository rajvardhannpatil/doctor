import './Bonuses.css';
import { handlePayment } from '../utils/razorpayPayment';
import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import m3 from '../assets/m3.png';

const Bonuses = () => {
  const handleRegisterClick = () => {
    handlePayment('link');
  };
  const bonuses = [
    {
      title: "Gut-Mind health मजबूत करण्यासाठीचे Daily morning routine Guide-PDF ",
      originalWorth: "Worth 500/-",
      image: m1,
      variant: "featured"
    },
    {
      title: "Powerful Activities for Gut-Mind-Body health Guide-PDF",
      originalWorth: "Worth 1000/-",
      image: m2,
      variant: "light"
    },
    {
      title: "Night healing routine पचन सुधारणा व मन शांती करण्यासाठी Guide-PDF",
      originalWorth: "Worth 500/-",
      image: m3,
      variant: "night"
    }
  ];

  return (
    <section className="bonuses">
      <div className="bonus-leaf bonus-leaf-left" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>
      <div className="bonus-leaf bonus-leaf-right" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>

      <div className="container">
        <div className="bonus-heading">
          <p className="investment-quote">आरोग्य हा खर्च नाही तर आयुष्याची सर्वोत्तम गुंतवणूक आहे</p>
          <div className="bonus-divider" aria-hidden="true">
            <span></span>
            <svg viewBox="0 0 24 24">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
              <path d="M9 22v-4h4" />
            </svg>
            <span></span>
          </div>
        </div>

        <div className="pricing-info">
          <p className="pricing-text">
            <span className="pricing-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M20 12v10H4V12" />
                <path d="M2 7h20v5H2z" />
                <path d="M12 22V7" />
                <path d="M12 7H8.5a2.5 2.5 0 1 1 2.1-3.8L12 7Z" />
                <path d="M12 7h3.5a2.5 2.5 0 1 0-2.1-3.8L12 7Z" />
              </svg>
            </span>
            Workshop प्रवेश फी इतर दिवशी <strong>₹999</strong>
          </p>
          <p className="pricing-highlight">
            <span className="pricing-leaf" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
                <path d="M9 22v-4h4" />
              </svg>
            </span>
            आता फक्त <strong>₹199</strong> मध्ये प्रवेश मिळवा आणि <strong>+ 3 bonus free</strong>
          </p>
        </div>

        <div className="special-offer-container" aria-label="Special Offer">
          <span>SPECIAL OFFER</span>
        </div>

        <h2 className="section-headline">
          या वर्कशॉप मध्ये आत्ता लगेच सहभागी व्हा आणि मिळवा <span>2000/-</span> किमतीचे खालील Bonuses पूर्णपणे फ्री (मोफत)
        </h2>

        <div className="bonuses-grid">
          {bonuses.map((bonus, index) => (
            <div key={index} className={`bonus-item bonus-item-${bonus.variant}`}>
              <div className="bonus-card-leaf" aria-hidden="true">
                <svg viewBox="0 0 90 120">
                  <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
                  <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
                  <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
                  <path d="M42 110C44 80 50 50 62 20" />
                </svg>
              </div>
              <div className="bonus-icon">
                <img src={bonus.image} alt={bonus.title} className="bonus-img" />
              </div>
              <div className="bonus-content">
                <h3>{bonus.title}</h3>
                <p className="guide-pill">Guide-PDF</p>
                <div className="bonus-worth-container">
                  <span className="bonus-worth">{bonus.originalWorth}</span>
                  <span className="free-badge">FREE</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bonus-note-card">
          <p>
            वरील <strong>2000/-</strong> किमतीचे <span>bonus Guides</span> फ्री मध्ये मिळवण्यासाठी
          </p>
          <p className="join-text">join now</p>
          <p>
            वरती क्लिक करा 199 पे करून या ग्रेट <strong>वर्कशॉप</strong> मध्ये सहभागी व्हा.
          </p>
        </div>

        <p className="bonus-note bonus-note-bold">
          <span className="clock-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 7v6l4 2" />
              <path d="M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path d="m4 4 3 3" />
              <path d="m20 4-3 3" />
            </svg>
          </span>
          Limited time for <strong>FREE BONUS</strong>
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

