import './WorkshopIntro.css';
import workshopPoster from '../assets/newprofile.jpeg';
import doctorPortrait from '../assets/drimage.jpeg';
import { handlePayment } from '../utils/razorpayPayment';

const WorkshopIntro = () => {
  const handleRegisterClick = () => {
    handlePayment('link');
  };

  return (
    <section className="workshop-intro" id="workshop">
      <div className="leaf-decor leaf-left">
        <svg viewBox="0 0 100 100" className="decor-svg">
          <path d="M50,90 C30,70 10,50 10,30 C10,15 25,10 40,25 C50,35 50,45 50,45 C50,45 50,35 60,25 C75,10 90,15 90,30 C90,50 70,70 50,90 Z" fill="#2d4520" opacity="0.05" />
        </svg>
      </div>
      <div className="leaf-decor leaf-right">
        <svg viewBox="0 0 100 100" className="decor-svg">
          <path d="M50,90 C30,70 10,50 10,30 C10,15 25,10 40,25 C50,35 50,45 50,45 C50,45 50,35 60,25 C75,10 90,15 90,30 C90,50 70,70 50,90 Z" fill="#2d4520" opacity="0.05" />
        </svg>
      </div>

      <div className="workshop-container">
        <div className="workshop-hero-section">
          <div className="workshop-text-content">
            <h2 className="workshop-main-headline">
              Transformative workshop sessions - program By
            </h2>

            <div className="workshop-box">
              <img src={doctorPortrait} alt="Dr. Akash Dongale" className="workshop-doctor-portrait" />
              <div className="workshop-doctor-copy">
                <h3 className="workshop-title">Dr. Akash Dongale (BNYS)</h3>
                <p className="workshop-instructor">
                  Naturopathy &amp; holistic health consultant, detox-reset expert, integrated wellness coach.
                </p>
                <p className="workshop-format">3 days live masterclass (on zoom)</p>
              </div>
            </div>

            <div className="workshop-info">
              <div className="workshop-schedule">
                <div className="schedule-item">
                  <span className="schedule-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M7 2v3M17 2v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                    </svg>
                  </span>
                  <span className="schedule-label"><strong>Starting date:</strong></span>
                  <span className="schedule-value">21 June to 23 June 2026</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 8v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </span>
                  <span className="schedule-label"><strong>Timing:</strong></span>
                  <span className="schedule-value">1 hr 30 minutes</span>
                </div>
                <div className="schedule-item schedule-item-batches">
                  <span className="schedule-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                  </span>
                  <span className="schedule-label"><strong>Batches:</strong></span>
                  <div className="schedule-value">
                    <div>Morning - 7:00 am to 8:30 am</div>

                  </div>
                </div>
              </div>
            </div>

            <div className="workshop-card-cta">
              <p className="workshop-marathi">
                संपूर्ण मार्गदर्शन <span className="marathi-highlight">मराठी मातृभाषेत</span>
              </p>
              <p className="workshop-approach">
                No strict diets - no gym - no supplement
              </p>
              <div className="cta-section">
                <p className="price-highlight">Join now @ ₹199 only</p>
                <p className="marathi-cta">आपला सहभाग नोंदवा ₹199 मध्ये</p>
                <button className="register-btn" onClick={handleRegisterClick}>
                  Reserve my seat @ ₹199
                </button>
              </div>
            </div>
          </div>

          <div className="workshop-image-content">
            <img src={workshopPoster} alt="Gut Mind Detox and Reset Workshop" className="doctor-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopIntro;

