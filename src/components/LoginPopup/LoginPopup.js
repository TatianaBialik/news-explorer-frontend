import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useForm from '../../utils/useForm';

function LoginPopup({
  isOpen,
  onClose,
  onSignUpClick,
  onLogin
}) {
  const {values, handleChange} = useForm({ email: '', password: '' });

  function handleSubmit() {
    onLogin(values);
  }

  return (
    <PopupWithForm 
      name='Sign in' 
      isOpen={isOpen} 
      onClose={onClose} 
      onSignUpClick={onSignUpClick}
      onSubmit={handleSubmit}>
      <label className='form__label'>Email</label>
      <input 
        type='text' 
        name='email'
        className='form__input' 
        placeholder='Enter email'
        onChange={handleChange}
        required />
      <span className="form__error email-error">Invalid email address</span>
      <label className='form__label'>Password</label>
      <input 
        type='password' 
        name='password'
        className='form__input' 
        placeholder='Enter password'
        onChange={handleChange}  
        required />
      <span className="form__error password-error">Invalid password</span>
    </PopupWithForm>
  )
};

export default LoginPopup;