import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegisterPopup({
  isOpen
}) {
  return (
    <PopupWithForm name='Sign up' isOpen={isOpen}>
      <label className='form__label'>Email</label>
      <input type='text' className='form__input' placeholder='Enter email'></input>
      <span className="form__error">ppp</span>
      <label className='form__label'>Password</label>
      <input type='password' className='form__input' placeholder='Enter password'></input>
      <label className='form__label'>Username</label>
      <input type='text' className='form__input' placeholder='Enter your username'></input>
    </PopupWithForm>
  )
};

export default RegisterPopup;