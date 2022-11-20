import './PopupWithForm.css';
import Popup from '../Popup/Popup';
import { NavLink } from 'react-router-dom';

function PopupWithForm({
  name,
  children,
  isOpen,
  onClose,
  onSignInClick,
  onSignUpClick,
  onSubmit,
  isValid
}) {

  const handleSignInClick = () => {
    onClose();
    onSignInClick();
  }

  const handleSignUpClick = () => {
    onClose();
    onSignUpClick();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <form 
        className="form"
        onSubmit={handleSubmit}>
        {children}
        <button type='submit' className={`form__submit-button ${!isValid && 'form__submit-button_disable'}`} disabled={!isValid}>{name}</button>
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