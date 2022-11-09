import Popup from '../Popup/Popup';
import { NavLink } from 'react-router-dom';

function SuccessPopup({ isOpen, onClose }) {
  return (
    <Popup name='Registration successfully completed!' isOpen={ isOpen } onClose={onClose}>
      <NavLink className='form__link'>Sign in</NavLink>
    </Popup>
  )
};

export default SuccessPopup;