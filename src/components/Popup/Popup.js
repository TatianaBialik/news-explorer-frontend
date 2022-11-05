import './Popup.css';
import { NavLink } from 'react-router-dom';

function Popup({
  name,
  linkName,
  children,
  isOpen
}) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__box">
        <h2 className="popup__title">{ name }</h2>
        <button className="popup__close-button" />
        <form className="popup__form">
          {children}
          <button className="popup__submit-button">{name}</button>
        </form>
        <p className="popup__subtext">
          or&nbsp;
          <NavLink className="popup__link">{name === 'Sign up' ? 'Sign in' : 'Sign up'}</NavLink>
        </p>
      </div>
    </div>
  )
};

export default Popup;