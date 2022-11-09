import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import CardList from '../CardList/CardList';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';
import Popup from '../Popup/Popup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { Route, Routes, Redirect, useHistory } from 'react-router-dom';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import SavedNews from '../SavedNews/SavedNews';
import { useState } from 'react';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const handleSignInButtonClick = () => {
    setIsLoginPopupOpen(true);
  }

  const handleSignUpClick = () => {
    setIsRegisterPopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
  }

  const username = 'Elise';

  return (
    <div className="page">
      <Routes>
        <Route 
          path='/' 
          element={
            <Main 
              isLoggedIn={false} 
              username={username}
              onSignInClick={handleSignInButtonClick} />
            } />
        <Route path='/saved' element={<SavedNews username={username} />} />
      </Routes>
      
      <LoginPopup isOpen={isLoginPopupOpen} onClose={closeAllPopups} onSignUpClick={handleSignUpClick} />
      <RegisterPopup isOpen={isRegisterPopupOpen} onClose={closeAllPopups} onSignInClick={handleSignInButtonClick} />
      <SuccessPopup isOpen={isSuccessPopupOpen} onClose={closeAllPopups} />
    </div>
  )
}

export default App;
