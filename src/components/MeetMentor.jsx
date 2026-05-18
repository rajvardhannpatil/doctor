import './MeetMentor.css';
import drImage from '../assets/drimage.jpeg';

const MeetMentor = () => {
  return (
    <section className="meet-mentor">
      <div className="mentor-leaf mentor-leaf-left" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>
      <div className="mentor-leaf mentor-leaf-right" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>

      <div className="container">
        <div className="mentor-heading">
          <p>Your Wellness Guide</p>
          <h2 className="section-headline">
            <span>Meet your</span>
            <span>mentor</span>
          </h2>
          <div className="mentor-divider" aria-hidden="true">
            <span></span>
            <svg viewBox="0 0 24 24">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
              <path d="M9 22v-4h4" />
            </svg>
            <span></span>
          </div>
        </div>

        <div className="mentor-content">
          <div className="mentor-image">
            <div className="mentor-image-card">
              <img 
                src={drImage} 
                alt="Dr. Akash Dongale" 
                className="doctor-image"
              />
            </div>
          </div>

          <div className="mentor-text">
            <h3 className="mentor-name">Dr. Akash Dongale <span>(BNYS)</span></h3>
            <div className="mentor-tags" aria-label="Mentor specialities">
              <span>Naturopathy Consultant</span>
              <span>Detox Reset Expert</span>
              <span>Integrated Wellness Coach</span>
            </div>
            <p>
              I am Dr. Akash Dongale, a Naturopathy & holistic health consultant, integrated wellness coach.
              Gut-mind-body detox & reset expert. Over the last 5 years, I've helped 500+ people
              heal naturally from Digestion Gut issues, skin problems, mental emotional imbalance & Various health and fitness related issues
            </p>
            <p>
              My approach combines ancient wisdom with modern understanding of the gut-brain connection. 
              I believe in empowering individuals to take control of their health through natural methods, 
              personalized guidance, and sustainable lifestyle changes. Through my workshops and consultations, 
              I've witnessed remarkable transformations as people rediscover their natural vitality and 
              achieve lasting wellness without relying on medications or restrictive diets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMentor;

