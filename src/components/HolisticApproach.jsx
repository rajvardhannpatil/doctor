import './HolisticApproach.css';
import pyramidImage from '../assets/banner2.jpeg';

const HolisticApproach = () => {
  return (
    <section className="holistic-approach">
      <div className="container">
        <h2 className="section-headline">
          Why is a Holistic approach is important for gut mind and all over health<br />
          आरोग्य मिळवण्यासाठी सर्वसमाविष्ट दृष्टिकोन का महत्वाचा आहे
        </h2>
        <div className="approach-content">
          <div className="approach-text">
            <ul className="approach-points">
              <li>
                <strong>शरीर मन भावना यांचा समतोल:</strong> समग्र आरोग्य पद्धत केवळ शारीरिक लक्षणावर नाही तर मानसिक आणि भावनिक कारणांवरही काम करते
              </li>
              <li>
                <strong>आजाराच्या मूळ कारणांवर उपाययोजना करते:</strong> फक्त लक्षणांवरती काम न करता आजार का झाला हे समजून घेऊन दीर्घकालीन उपाय देते
              </li>
              <li>
                <strong>प्रतिबंधात्मक उपायांवर भर देवून:</strong> आजार होण्यापूर्वीच योग्य सवयी लावून आरोग्य टिकवण्यास मदत करते
              </li>
              <li>
                <strong>एकूण जीवनमान सुधारते:</strong> समग्र दृष्टिकोनामुळे केवळ आरोग्यच नाही तर ऊर्जा मानसिक शांती आणि जीवनातील समाधान वाढते
              </li>
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

