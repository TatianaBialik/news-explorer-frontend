import './PopupWithForm.css';
import Popup from '../Popup/Popup';
import { NavLink } from 'react-router-dom';

function PopupWithForm({
  name,
  children,
  isOpen,
  onClose,
  onSignInClick,
  onSignUpClick
}) {

  const handleSignInClick = () => {
    onClose();
    onSignInClick();
  }

  const handleSignUpClick = () => {
    onClose();
    onSignUpClick();
  }

  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <form className="form">
        {children}
        <span className="form__error form__error_common">ppp</span>
        <button className="form__submit-button">{name}</button>
      </form>
      <p className="form__subtext">
        or&nbsp;
        <NavLink 
          className="form__link" 
          onClick={name === 'Sign in' ? handleSignUpClick : handleSignInClick}>
            {name === 'Sign in' ? 'Sign up' : 'Sign in'}
          </NavLink>
      </p>
    </Popup>
  )
};

export default PopupWithForm;