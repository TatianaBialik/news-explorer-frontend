import { useState } from 'react';
import { Route, Routes, Redirect, useHistory } from 'react-router-dom';

import Main from '../Main/Main';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import SavedNews from '../SavedNews/SavedNews';
import { cards } from '../../utils/temp_consts';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState(cards);

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
              isLoggedIn={isLoggedIn} 
              username={username}
              onSignInClick={handleSignInButtonClick}
              isLoading={isLoading}
              articles={articles} />
            } />
        <Route path='/saved-news' element={<SavedNews username={username} articles={articles} />} />
      </Routes>
      
      <LoginPopup isOpen={isLoginPopupOpen} onClose={closeAllPopups} onSignUpClick={handleSignUpClick} />
      <RegisterPopup isOpen={isRegisterPopupOpen} onClose={closeAllPopups} onSignInClick={handleSignInButtonClick} />
      <SuccessPopup isOpen={isSuccessPopupOpen} onClose={closeAllPopups} onSignInClick={handleSignInButtonClick} />
    </div>
  )
}

export default App;
