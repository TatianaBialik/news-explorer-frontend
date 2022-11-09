import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup({
  isOpen,
  onClose,
  onSignUpClick
}) {
  return (
    <PopupWithForm 
      name='Sign in' 
      isOpen={isOpen} 
      onClose={onClose} 
      onSignUpClick={onSignUpClick}>
      <label className='form__label'>Email</label>
      <input type='text' className='form__input' placeholder='Enter email'></input>
      <span className="form__error email-error">Invalid email address</span>
      <label className='form__label'>Password</label>
      <input type='password' className='form__input' placeholder='Enter password'></input>
      <span className="form__error password-error">Invalid password</span>
    </PopupWithForm>
  )
};

export default LoginPopup;