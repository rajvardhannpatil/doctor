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
      <div className="transformation-leaf transformation-leaf-left" aria-hidden="true">
        <svg viewBox="0 0 120 120">
          <path d="M58 94C38 78 22 56 22 36c0-12 10-19 22-11 9 6 13 17 14 27 3-14 11-29 27-36 12-5 21 3 18 16-5 23-26 43-45 62Z" />
        </svg>
      </div>
      <div className="transformation-leaf transformation-leaf-right" aria-hidden="true">
        <svg viewBox="0 0 120 120">
          <path d="M58 94C38 78 22 56 22 36c0-12 10-19 22-11 9 6 13 17 14 27 3-14 11-29 27-36 12-5 21 3 18 16-5 23-26 43-45 62Z" />
        </svg>
      </div>

      <div className="container">
        <div className="transformations-heading">
          <h2 className="section-headline">
            <span>तुम्ही या वर्कशॉप मधून काय शिकाल -</span>
            <span>मिळवाल कोणते परिवर्तन अपेक्षित आहे</span>
          </h2>
          <div className="transformations-divider" aria-hidden="true">
            <span></span>
            <svg viewBox="0 0 24 24">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
              <path d="M9 22v-4h4" />
            </svg>
            <span></span>
          </div>
        </div>

        <div className="transformations-list">
          {transformations.map((item, index) => (
            <div key={index} className="transformation-item">
              <div className="transformation-number">{item.number}</div>
              <p className="transformation-description">{item.description}</p>
              <div className="transformation-card-leaf" aria-hidden="true">
                <svg viewBox="0 0 90 120">
                  <path d="M46 110C44 82 53 55 78 38c5 31-5 59-32 72Z" />
                  <path d="M38 93C23 75 17 52 26 29c19 18 25 42 12 64Z" />
                  <path d="M49 76C39 54 42 31 58 12c12 25 9 48-9 64Z" />
                  <path d="M42 110C44 80 50 50 62 20" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;

