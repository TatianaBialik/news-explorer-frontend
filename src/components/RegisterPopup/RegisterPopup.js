import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useForm from '../../utils/useForm';
import { useEffect } from 'react';

function RegisterPopup({
  isOpen,
  onClose,
  onSignInClick,
  onRegister
}) {
  const {values, handleChange, setValues} = useForm({ email: '', password: '', name: '' });

  useEffect(() => {
    setValues({ email: '', password: '', name: '' });
  }, [isOpen]);

  function handleSubmit() {
    onRegister(values);
  }

  return (
    <PopupWithForm 
      name='Sign up' 
      isOpen={isOpen} 
      onClose={onClose}
      onSignInClick={onSignInClick}
      onSubmit={handleSubmit}>
      <label className='form__label'>Email</label>
      <input 
        type='email' 
        name='email'
        className='form__input' 
        placeholder='Enter email'
        onChange={handleChange}
        value={values.email}
        required />
      <span className="form__error email-error">Invalid email address</span>
      <label className='form__label'>Password</label>
      <input 
        type='password' 
        name='password'
        className='form__input' 
        placeholder='Enter password'
        onChange={handleChange}
        value={values.password}
        required />
      <span className="form__error password-error">Invalid password</span>
      <label className='form__label'>Username</label>
      <input 
        type='text' 
        name='name'
        className='form__input' 
        placeholder='Enter your username'
        onChange={handleChange}
        value={values.name}
        required />
      <span className="form__error username-error">Invalid username</span>
    </PopupWithForm>
  )
};

export default RegisterPopup;