import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegisterPopup({
  isOpen,
  onClose,
  onSignInClick
}) {
  return (
    <PopupWithForm 
      name='Sign up' 
      isOpen={isOpen} 
      onClose={onClose}
      onSignInClick={onSignInClick}>
      <label className='form__label'>Email</label>
      <input 
        type='text' 
        className='form__input' 
        placeholder='Enter email'
        required />
      <span className="form__error email-error">Invalid email address</span>
      <label className='form__label'>Password</label>
      <input 
        type='password' 
        className='form__input' 
        placeholder='Enter password'
        required />
      <span className="form__error password-error">Invalid password</span>
      <label className='form__label'>Username</label>
      <input 
        type='text' 
        className='form__input' 
        placeholder='Enter your username'
        required />
      <span className="form__error username-error">Invalid username</span>
    </PopupWithForm>
  )
};

export default RegisterPopup;