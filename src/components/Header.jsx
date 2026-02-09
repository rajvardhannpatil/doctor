import './Header.css';

const Header = () => {
  const handleEnrollClick = () => {
    // Scroll to workshop section where disclaimer is located
    const workshopSection = document.getElementById('workshop');
    if (workshopSection) {
      workshopSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback: scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">Healholis Wellness</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#workshop">Workshop</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <button className="enroll-btn" onClick={handleEnrollClick}>Enroll Now</button>
      </div>
    </header>
  );
};

export default Header;

