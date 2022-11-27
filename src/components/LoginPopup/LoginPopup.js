import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useEffect } from 'react';
import useFormWithValidation from '../../utils/useFormWithValidation';

function LoginPopup({
  isOpen,
  onClose,
  onSignUpClick,
  onLogin,
  isCommonError
}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues
  } = useFormWithValidation({ email: '', password: '' });

  useEffect(() => {
    resetForm();
    setValues({ email: '', password: '' });
  }, [isOpen]);

  function handleSubmit() {
    onLogin(values);
  }

  return (
    <PopupWithForm
      name='Sign in'
      isOpen={isOpen}
      onClose={onClose}
      onSignUpClick={onSignUpClick}
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
      <span 
        className={`form__error email-error  ${errors['email'] && 'form__error_visible'}`}>
        Invalid email
      </span>
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
      <span 
        className={`form__error password-error ${errors['password'] && 'form__error_visible'}`}>
        Password is too short
      </span>
      <span 
        className={`form__error form__error_common ${isCommonError && 'form__error_visible'}`}>
        Incorrect email or password
      </span>
    </PopupWithForm>
  )
};

export default LoginPopup;