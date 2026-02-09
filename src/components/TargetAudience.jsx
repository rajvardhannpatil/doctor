import './TargetAudience.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

const TargetAudience = () => {
  const images = [image1, image2, image5, image4, image3, image6];

  const audienceItems = [
    {
      marathi: "जर तुम्हाला अपचन, आम्लपित्त, पोट साफ न होणे, पोट फुगणे, जडपणा, भूक संबंधी समस्या असतील",
      english: "If you have digestive issues like acidity, constipation, indigestion, gas, bloating, heaviness etc."
    },
    {
      marathi: "जर तुम्हाला अस्वस्थता, कमजोरी, आळस, थकवा, आत्मविश्वास कमी, निराशा, उत्साह कमी, बेचैनी असेल",
      english: "If you have weakness, restlessness, discomfort, low confidence, low energy, weak concentration and focus"
    },
    {
      marathi: "जर तुम्ही ताण तणाव, चिंताग्रस्त भीती, तनावाने होणारी डोकेदुखी मूड खराब राहणे, मानसिक थकान अनुभवत असाल",
      english: "If you feeling stressed, anxiety, depression, fear, tension headache, mood swings, mental fatigue, nervousness"
    },
    {
      marathi: "जर तुम्ही राग, चिडचिड, कमजोर जागृतता, कमजोर निर्णय क्षमता, संयम नसणे, टाळाटाळ वृत्ती अश्या गोष्टींना समोर जात असाल",
      english: "If you have anger issues, irritability, weak decision making, weak alertness, low patience, procrastination"
    },
    {
      marathi: "जर तुम्हाला त्वचेच्या समस्या, चेहऱ्यावरती शरीरावरती पिंपल्स, पुरळ, फोड, खाज, कोरडेपणा, केस गळती, काळे पांढरे डाग निस्तेजपणा असेल",
      english: "If you have skin issues, dull skin, pimple, acne, Eczema, rashes, pigmentation, hair fall"
    },
    {
      marathi: "जर तुम्ही नकारात्मकता, नकारात्मक विचार, अतिविचार, झोपेच्या समस्या, निद्रानाश, अपुरी गुणवत्ता झोप, विसरभोळेपणा अश्या अडचणी जाणवत असेल",
      english: "Negativity, negative thoughts, over thinking, sleep issues, poor quality sleep, insomnia, brain fog"
    }
  ];

  return (
    <section className="target-audience">
      <div className="container">
        <p className="section-subtitle">जर तुम्ही स्वतःमध्ये खालील त्रास-समस्या अनुभवत असाल. If you facing</p>
        <h2 className="section-headline">तर ही वर्कशॉप तुमच्यासाठी आहे</h2>
        <div className="audience-grid">
          {audienceItems.map((item, index) => (
            <div key={index} className="audience-item">
              <div className="audience-image">
                <img 
                  src={images[index]} 
                  alt={`${item.english}`}
                  className="audience-img"
                />
              </div>
              <div className="audience-content">
                <p className="audience-marathi">{item.marathi}</p>
                <p className="audience-english">{item.english}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

