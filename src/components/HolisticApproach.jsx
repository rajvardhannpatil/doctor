import './HolisticApproach.css';
import pyramidImage from '../assets/banner2.jpeg';

const HolisticApproach = () => {
  const approachPoints = [
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path d="M4 21a8 8 0 0 1 8-7 8 8 0 0 1 5.5 2.2" />
          <path d="M18 21s-4-2.3-4-5.4c0-1.5 1.2-2.6 2.6-2.6.9 0 1.6.4 2 1.1.4-.7 1.1-1.1 2-1.1 1.4 0 2.6 1.1 2.6 2.6 0 3.1-4 5.4-4 5.4Z" />
        </svg>
      ),
      title: "शरीर मन भावना यांचा समतोल:",
      description: "समग्र आरोग्य पद्धत केवळ शारीरिक लक्षणांवर नाही तर मानसिक आणि भावनिक कारणांवरही काम करते"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 21c5-3.5 8-7.5 8-12V5l-8-3-8 3v4c0 4.5 3 8.5 8 12Z" />
          <path d="M12 16V8" />
          <path d="M8 12c2.8 0 4 1.5 4 4" />
          <path d="M16 9c-2.8 0-4 1.5-4 4" />
        </svg>
      ),
      title: "आजाराच्या मूळ कारणांवर उपाययोजना करते:",
      description: "फक्त लक्षणांवरती काम न करता आजार का झाला हे समजून घेऊन दीर्घकालीन उपाय देते"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 21c5-3.5 8-7.5 8-12V5l-8-3-8 3v4c0 4.5 3 8.5 8 12Z" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
      title: "प्रतिबंधात्मक उपायांवर भर देवून:",
      description: "आजार होण्यापूर्वीच योग्य सवयी लावून आरोग्य टिकवण्यास मदत करते"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path d="M5 21c1.5-4 4-6 7-6s5.5 2 7 6" />
          <path d="M8 18h8" />
          <path d="M6 14c-2 1-3 2.5-3 5" />
          <path d="M18 14c2 1 3 2.5 3 5" />
        </svg>
      ),
      title: "एकूण जीवनमान सुधारते:",
      description: "समग्र दृष्टिकोनामुळे केवळ आरोग्यच नाही तर ऊर्जा मानसिक शांती आणि जीवनातील समाधान वाढते"
    }
  ];

  return (
    <section className="holistic-approach">
      <div className="holistic-leaf holistic-leaf-left" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>
      <div className="holistic-leaf holistic-leaf-right" aria-hidden="true">
        <svg viewBox="0 0 90 120">
          <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
          <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
          <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
          <path d="M42 110C44 80 50 50 62 20" />
        </svg>
      </div>

      <div className="container">
        <div className="holistic-heading">
          <h2 className="section-headline">
            <span>Why is a Holistic approach</span>
            <span>important for</span>
            <span>gut mind and all over health</span>
          </h2>
          <div className="holistic-divider" aria-hidden="true">
            <span></span>
            <svg viewBox="0 0 24 24">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
              <path d="M9 22v-4h4" />
            </svg>
            <span></span>
          </div>
          <p>आरोग्य मिळवण्यासाठी सर्वसमावेशक दृष्टिकोन का महत्वाचा आहे</p>
        </div>

        <div className="approach-content">
          <div className="approach-text">
            <ul className="approach-points">
              {approachPoints.map((point, index) => (
                <li key={index}>
                  <div className="approach-icon">{point.icon}</div>
                  <div className="approach-copy">
                    <strong>{point.title}</strong>
                    <span>{point.description}</span>
                  </div>
                  <div className="approach-card-leaf" aria-hidden="true">
                    <svg viewBox="0 0 90 120">
                      <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
                      <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
                      <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
                      <path d="M42 110C44 80 50 50 62 20" />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="approach-visual">
            <img 
              src={pyramidImage} 
              alt="Holistic Health Pyramid - Fitness, Body, Mind, Spirit" 
              className="pyramid-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticApproach;

