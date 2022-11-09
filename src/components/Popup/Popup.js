import './Popup.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

function Popup({
  name,
  children,
  isOpen,
  onClose
}) {
  useEffect(() => {
    if (!isOpen) {
      return;
    };

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      };
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    };
  };

  return (
    <div 
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      onClick={handleOverlayClick}>
      <div className="popup__box">
        <h2 className="popup__title">{ name }</h2>
        <button
          type='button' 
          className="popup__close-button" 
          aria-label='Close' 
          onClick={onClose} />
        {children}
      </div>
    </div>
  )
};

export default Popup;