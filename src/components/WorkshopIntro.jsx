import './WorkshopIntro.css';
import drImage from '../assets/newprofile.jpeg';
import { handlePayment } from '../utils/razorpayPayment';

const WorkshopIntro = () => {
  const handleRegisterClick = () => {
    handlePayment('link');
  };

  return (
    <section className="workshop-intro" id="workshop">
      <div className="yellow-banner">
        <p>Only 50 seats left</p>
      </div>
      <div className="workshop-container">
        <div className="workshop-content">
          <h2 className="workshop-main-headline">
            Great Detox-reset (gut & mind) masterclass by
          </h2>
          
          <div className="workshop-details">
            <div className="workshop-box">
              <h3 className="workshop-title">Dr. Akash Dongale</h3>
              <p className="workshop-instructor">
                Naturopathy practitioner, Gut-mind-body Detox expert, holistic healer
              </p>
              
              <div className="workshop-info">
                <p className="workshop-format">3 days live masterclass (on zoom)</p>
                <div className="workshop-schedule">
                  <p><strong>Starting date:</strong> --</p>
                  <p><strong>Timing:</strong> --</p>
                  <p><strong>Batches:</strong> Morning / Night</p>
                </div>
              </div>
              
              <p className="workshop-marathi">संपूर्ण मार्गदर्शन मराठी मातृभाषेत</p>
              <p className="workshop-approach">No strict diets - no gym - no supplement</p>
              
              <div className="cta-section">
                <p className="price-highlight">Join now @ ₹199 only</p>
                <p className="marathi-cta">आपला सहभाग नोंदवा ₹199 मध्ये</p>
                <button className="register-btn" onClick={handleRegisterClick}>Reserve my seat @ ₹199</button>
              </div>
            </div>
            <div className="workshop-image">
              <img 
                src={drImage} 
                alt="Dr. Akash Dongale" 
                className="doctor-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopIntro;

