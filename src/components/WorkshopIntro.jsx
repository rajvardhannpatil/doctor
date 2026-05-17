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
        <p> Join before seats get full</p>
      </div>
      <div className="workshop-container">
        <div className="workshop-content">
          <h2 className="workshop-main-headline">
            Transformative workshop sessions - program By
          </h2>

          <div className="workshop-details">
            <div className="workshop-box">
              <h3 className="workshop-title">Dr. Akash Dongale (BNYS)</h3>
              <p className="workshop-instructor">
                Naturopathy & holistic health consultant, detox-reset expert, integrated wellness coach.
              </p>

              <div className="workshop-info">
                <p className="workshop-format">3 days live masterclass (on zoom)</p>
                <div className="workshop-schedule">
                  <div className="schedule-item">
                    <span className="schedule-label"><strong>Starting date:</strong></span>
                    <span className="schedule-value">14 March to 16 march 2026</span>
                  </div>
                  <div className="schedule-item">
                    <span className="schedule-label"><strong>Timing:</strong></span>
                    <span className="schedule-value">1 hr 30 minutes</span>
                  </div>
                  <div className="schedule-item schedule-item-batches">
                    <span className="schedule-label"><strong>Batches:</strong></span>
                    <div className="schedule-value">
                      <div>Morning - 7:00 am to 8:30 am</div>
                      <div>Night - 9:30 pm to 11:00 pm</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="workshop-marathi">संपूर्ण मार्गदर्शन <span className="marathi-highlight">मराठी मातृभाषेत</span></p>
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

