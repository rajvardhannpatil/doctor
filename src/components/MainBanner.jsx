import './MainBanner.css';
import bannerImage from '../assets/banner.jpeg';
import drImage from '../assets/newprofile.jpeg';

const MainBanner = () => {
  const handleScrollToWorkshop = () => {
    const workshopSection = document.getElementById('workshop');
    if (workshopSection) {
      workshopSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="main-banner-new" id="home">
      {/* Background soft leaf decoration SVGs */}
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

      <div className="banner-new-container">

        <div className="banner-hero-section">
          {/* Left Column: Text Content */}
          <div className="banner-text-content">
            {/* Sanskrit/Marathi Subtitle */}
            <p className="banner-marathi-subtitle">
              या आरोग्य संपन्नतेच्या प्रवासात सहभागी व्हा तुमचं आरोग्य हाच तुमचा खरा आधार आहे.
            </p>

            {/* Main Headline */}
            <h1 className="banner-new-headline">
              Detox & Reset
              <span className="headline-break">Gut-Mind-Body</span>
            </h1>

            {/* Subtitle */}
            <p className="banner-new-subtitle">
              Join 3-day Great workshop
              <span className="subtitle-sub">"Activate Your Self Healing"</span>
            </p>

            {/* Bold Marathi text */}
            <h2 className="banner-new-marathi-bold">
              आरोग्य परिवर्तनाची नवी सुरुवात
            </h2>

            {/* Yellow Pill CTA Button */}
            <div className="banner-new-cta-wrapper">
              <button className="banner-new-cta-btn" onClick={handleScrollToWorkshop}>
                <div className="cta-icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cta-leaf-svg">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z"></path>
                    <path d="M9 22v-4h4"></path>
                  </svg>
                </div>
                <span className="cta-btn-text">Join before seats get full</span>
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="banner-image-content">
            <div className="banner-img-card-wrapper">
              <div className="banner-img-card">
                <img
                  src={bannerImage}
                  alt="Be Healthy - Healholis Wellness"
                  className="banner-main-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Mentor Card */}
        

      </div>
    </section>
  );
};

export default MainBanner;


