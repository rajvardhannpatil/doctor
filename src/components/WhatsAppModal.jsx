import { useState, useEffect } from 'react';
import './WhatsAppModal.css';

const WhatsAppModal = () => {
  const [isOpen, setIsOpen] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get('payment_status');
    const paymentSuccess = localStorage.getItem('payment_success');

    return paymentStatus === 'success' || paymentSuccess === 'true';
  });
  const whatsappLink = 'https://chat.whatsapp.com/B9eKUnsd5k73axxPR2fBmd?mlu=4&s=sw&p=a';

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get('payment_status');
    const paymentSuccess = localStorage.getItem('payment_success');

    if (paymentStatus === 'success' || paymentSuccess === 'true') {
      // Clear the localStorage flag after showing modal
      localStorage.removeItem('payment_success');
      // Clean URL by removing payment_status parameter
      if (paymentStatus === 'success') {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, []);

  const handleJoinWhatsApp = () => {
    window.open(whatsappLink, '_blank');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="whatsapp-modal-overlay" onClick={handleClose}>
      <div className="whatsapp-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="whatsapp-modal-close" onClick={handleClose}>×</button>
        <div className="whatsapp-modal-icon">📱</div>
        <h2 className="whatsapp-modal-title">Payment Successful! 🎉</h2>
        <p className="whatsapp-modal-message">
          Thank you for registering! Join our WhatsApp group to get updates, connect with other participants, and receive important workshop information.
        </p>
        <button className="whatsapp-modal-button" onClick={handleJoinWhatsApp}>
          Join WhatsApp Group
        </button>
        <button className="whatsapp-modal-skip" onClick={handleClose}>
          Maybe Later
        </button>
      </div>
    </div>
  );
};

export default WhatsAppModal;

