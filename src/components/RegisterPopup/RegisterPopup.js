import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useEffect } from 'react';
import useFormWithValidation from '../../utils/useFormWithValidation';

function RegisterPopup({
  isOpen,
  onClose,
  onSignInClick,
  onRegister,
  isCommonError
}) {
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation({ email: '', password: '', name: '' });

  useEffect(() => {
    resetForm();
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
      onSubmit={handleSubmit}
      isValid={isValid}>
      <label className='form__label'>Email</label>
      <input 
        type='email' 
        name='email'
        className='form__input' 
        placeholder='Enter email'
        onChange={handleChange}
        value={values.email}
        required />
      <span className={`form__error email-error  ${errors['email'] && 'form__error_visible'}`}>Invalid email</span>
      <label className='form__label'>Password</label>
      <input 
        type='password' 
        name='password'
        className='form__input' 
        placeholder='Enter password'
        onChange={handleChange}
        value={values.password}
        minLength='8'
        required />
      <span className={`form__error password-error ${errors['password'] && 'form__error_visible'}`}>Password is too short</span>
      <label className='form__label'>Username</label>
      <input 
        type='text' 
        name='name'
        className='form__input' 
        placeholder='Enter your username'
        onChange={handleChange}
        value={values.name}
        minLength='3'
        required />
      <span className={`form__error name-error ${errors['name'] && 'form__error_visible'}`}>Invalid username</span>
      <span className={`form__error form__error_common ${isCommonError && 'form__error_visible'}`}>This email is not available</span>
    </PopupWithForm>
  )
};

export default RegisterPopup;