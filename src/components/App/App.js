import { useState } from 'react';
import { Route, Routes, Redirect, useHistory } from 'react-router-dom';

import Main from '../Main/Main';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import SavedNews from '../SavedNews/SavedNews';
import { cards } from '../../utils/temp_consts';
import * as mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState(cards);
  const [currentUser, setCurrentUser] = useState('Elise');
  const [token, setToken] = useState(localStorage.getItem('jwt'));

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

  function handleRegister({ email, password, name }) {
    mainApi
      .register(email, password, name)
      .then((res) => {
        if (res._id) {
          closeAllPopups();
          setIsSuccessPopupOpen(true);
        } else {
          console.log(res);
        };
      })
      .catch((err) => console.log(err));
  };

  function handleLogin({ email, password }) {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          setIsLoggedIn(true);
          setCurrentUser(res.name);
          localStorage.setItem('jwt', res.token);
          setToken(res.token);
          closeAllPopups();
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route 
            path='/' 
            element={
              <Main 
                isLoggedIn={isLoggedIn} 
                username={currentUser}
                onSignInClick={handleSignInButtonClick}
                isLoading={isLoading}
                articles={articles} />
              } />
          <Route path='/saved-news' element={
            <SavedNews 
              username={currentUser} 
              articles={articles} />
          } />
        </Routes>
      
        <LoginPopup 
          isOpen={isLoginPopupOpen} 
          onClose={closeAllPopups} 
          onSignUpClick={handleSignUpClick}
          onLogin={handleLogin} />
        <RegisterPopup 
          isOpen={isRegisterPopupOpen} 
          onClose={closeAllPopups} 
          onSignInClick={handleSignInButtonClick}
          onRegister={handleRegister} />
        <SuccessPopup 
          isOpen={isSuccessPopupOpen} 
          onClose={closeAllPopups} 
          onSignInClick={handleSignInButtonClick} />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
