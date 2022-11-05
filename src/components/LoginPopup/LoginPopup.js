import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup({
  isOpen
}) {
  return (
    <PopupWithForm name='Sign in' isOpen={isOpen}>
      <label className='form__label'>Email</label>
      <input type='text' className='form__input' placeholder='Enter email'></input>
      <span className="form__error">ppp</span>
      <label className='form__label'>Password</label>
      <input type='password' className='form__input' placeholder='Enter password'></input>
    </PopupWithForm>
  )
};

export default LoginPopup;