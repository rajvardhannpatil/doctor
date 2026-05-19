import './FloatingWhatsApp.css';

const phoneNumber = '919307631817';
const message = 'Hi, I want more information about the workshop.';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const FloatingWhatsApp = () => {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp for more information"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16.01 3.2c-7.04 0-12.77 5.72-12.77 12.76 0 2.25.6 4.45 1.73 6.38L3.14 29l6.82-1.79a12.7 12.7 0 0 0 6.05 1.54h.01c7.04 0 12.77-5.72 12.77-12.76S23.06 3.2 16.01 3.2Zm0 23.39h-.01a10.6 10.6 0 0 1-5.39-1.48l-.39-.23-4.05 1.06 1.08-3.95-.26-.41a10.56 10.56 0 0 1-1.62-5.62c0-5.86 4.77-10.62 10.64-10.62 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.86-4.77 10.61-10.63 10.61Zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.98-2.33-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>
      <span>More Info</span>
    </a>
  );
};

export default FloatingWhatsApp;
