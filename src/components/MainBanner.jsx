import './MainBanner.css';
import bannerImage from '../assets/banner1.png';

const MainBanner = () => {
  return (
    <section className="main-banner" id="home">
      <div className="banner-overlay">
        <div className="banner-wrapper">
          <div className="banner-content">
            <p className="banner-subtitle">
              या आरोग्य संपन्नतेच्या प्रवासात सहभागी व्हा तुमचं आरोग्य हाच तुमचा खरा आधार आहे.
            </p>
            <h1 className="banner-headline">
              Gut & Mind Detox - Reset Workshop
            </h1>
            <p className="banner-subtitle-2">Join 3 days program</p>
            <h2 className="banner-headline-bold">
              आरोग्य परिवर्तनाची नवी सुरुवात
            </h2>
          </div>
          <div className="banner-image-container">
            <img 
              src={bannerImage} 
              alt="Gut & Mind Detox Workshop" 
              className="banner-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;

