import './Transformations.css';

const Transformations = () => {
  const transformations = [
    {
      number: "1",
      description: "तुमची पचनशक्ती गट- माईंड - बॉडी हेल्थ सुधारण्यासाठी हॉलिस्टिक हेल्थ & नेचरोपॅथी उपाय- योजना पद्धती ट्रिक अँड टेक्निक्स शिकाल"
    },
    {
      number: "2",
      description: "नकारात्मक विचार व ताण तणाव चिंता भीती यांना दूर ठेवण्याचे व त्यांच्याशी लढण्याची सिक्रेट पद्धती शिकाल"
    },
    {
      number: "3",
      description: "तुमचे शरीर व मन नॅचरली डिटॉक्स (स्वच्छ) करण्याचे आणि विषारी घटक शरीराबाहेर काढण्याच्या सोप्या उपाय योजना शिकाल"
    },
    {
      number: "4",
      description: "आनंदी आरोग्यदायी सुंदर जीवनासाठी स्वतःतील नैसर्गिक शक्ती ऍक्टिव्हट करण्याची कला शिकाल"
    },
    {
      number: "5",
      description: "आणि अशीच बरीच माहिती व ज्ञान मिळवून त्याचा वापर तुम्ही केल्यास वरील समस्यांचे निरसरण करण्यास तुम्ही सक्षम बनू शकता"
    }
  ];

  return (
    <section className="transformations">
      <div className="container">
        <h2 className="section-headline">तुम्ही या वर्कशॉप मधून काय शिकाल - मिळवाल कोणते परिवर्तन अपेक्षित आहे</h2>
        <div className="transformations-list">
          {transformations.map((item, index) => (
            <div key={index} className="transformation-item">
              <div className="transformation-number">{item.number}</div>
              <p className="transformation-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;

