import Popup from '../Popup/Popup';
import { NavLink } from 'react-router-dom';

function SuccessPopup({ isOpen, onClose, onSignInClick }) {
  const handleSignInClick = () => {
    onClose();
    onSignInClick();
  }

  return (
    <Popup name='Registration successfully completed!' isOpen={ isOpen } onClose={onClose}>
      <NavLink className='form__link' onClick={handleSignInClick}>Sign in</NavLink>
    </Popup>
  )
};

export default SuccessPopup;