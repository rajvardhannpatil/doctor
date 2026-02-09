import './MeetMentor.css';
import drImage from '../assets/drimage.jpeg';

const MeetMentor = () => {
  return (
    <section className="meet-mentor">
      <div className="container">
        <h2 className="section-headline">Meet your mentor</h2>
        <h3 className="mentor-name">Dr. Akash Dongale (  BNYS ) </h3>
        <div className="mentor-content">
          <div className="mentor-text">
            <p>
              I am Dr. Akash Dongale, a Naturopathy & holistic health wellness professional. 
              Gut-mind-body detox & reset expert. Over the last 5 years, I've helped 500+ people 
              heal naturally from Digestion Gut issues, skin problems, mental emotional imbalance.
            </p>
            <p>
              My approach combines ancient wisdom with modern understanding of the gut-brain connection. 
              I believe in empowering individuals to take control of their health through natural methods, 
              personalized guidance, and sustainable lifestyle changes. Through my workshops and consultations, 
              I've witnessed remarkable transformations as people rediscover their natural vitality and 
              achieve lasting wellness without relying on medications or restrictive diets.
            </p>
          </div>
          <div className="mentor-image">
            <img 
              src={drImage} 
              alt="Dr. Akash Dongale" 
              className="doctor-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMentor;

