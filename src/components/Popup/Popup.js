import './Popup.css';
import { NavLink } from 'react-router-dom';

function Popup({
  name,
  children,
  isOpen
}) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__box">
        <h2 className="popup__title">{ name }</h2>
        <button className="popup__close-button" />
        {children}
      </div>
    </div>
  )
};

export default Popup;