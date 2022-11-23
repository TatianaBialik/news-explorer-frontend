//React
import { useState, useEffect, useRef } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
//Elements
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
//Popups
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
//API
import * as mainApi from '../../utils/MainApi';
import search from '../../utils/NewsApi';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { ADDED_CARDS } from '../../utils/constants';

function App() {
  //Popups states
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  //Login and user states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem('jwt'));
  //News states
  const [isLoading, setIsLoading] = useState(false);
  const articles = useRef([]);
  const [renderedCards, setRenderedCards] = useState([]);
  const [wasSearch, setWasSearch] = useState(false);
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [showMoreButtonVisible, setShowMoreButtonVisible] = useState(true);

  const [registerError, setRegisterError] = useState(false);

  /////////////////////////////////////////////////////////////////
  /* CHECKING TOKEN WHEN THE RESOURSE IS LOADED/TOKEN IS CHANGED */
  useEffect(() => {
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res._id) {
            setCurrentUser(res);
            setIsLoggedIn(true);
          } else {
            localStorage.removeItem('jwt')
          }
        })
        .catch((err) => console.log(err));
    };
  }, [token]);

  /////////////////////////////////////////////
  /* LOADING SAVED NEWS FOR AUTHORIZED USER */
  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getArticles(token)
        .then((res) => {
          if (res)
            setCurrentUser((currentUser) => ({ ...currentUser, savedArticles: res }));
        })
    }
  }, [isLoggedIn]);

  //////////////////////////////////////
  /* SET SHOW MORE BUTTON VISIBILITY */
  useEffect(() => {
    articles.current.length > renderedCards.length
      ? setShowMoreButtonVisible(true)
      : setShowMoreButtonVisible(false);
  }, [articles.current, renderedCards])

  ///////////////////////////////////////
  /* POPUPS STATE CHANGING: OPEN/CLOSE */
  const handleSignInButtonClick = () => {
    setIsLoginPopupOpen(true);
  }

  const handleSignUpClick = () => {
    setIsRegisterPopupOpen(true);
    setRegisterError(false);
  }

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
  }

  ////////////////////////////////////////////
  /* AUTHORIZATION: REGISTER, LOGIN/LOGOUT */
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
      .catch((err) => {
        if (err === 'Error: 409') setRegisterError(true);
        else console.log(err);
      });
  };

  function handleLogin({ email, password }) {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          setIsLoggedIn(true);
          setCurrentUser(res);
          localStorage.setItem('jwt', res.token);
          setToken(res.token);
          closeAllPopups();
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  function handleLogout() {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem('jwt');
    setToken('');
    setIsLoginPopupOpen(true);
  };

  //////////////////////////
  /* TO FORMAT A KEYWORD */
  function firstLeterToUpperCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  //////////////////////////////////////
  /* SEARCH ARTICLES AND RENDER CARDS */
  const handleSearch = (keyword) => {
    setIsLoading(true);
    setShowMoreButtonVisible(true);
    setCurrentKeyword(firstLeterToUpperCase(keyword));
    search(keyword)
      .then((res) => {
        setWasSearch(true);
        if (res.articles) {
          articles.current = res.articles;
          setRenderedCards(articles.current.slice(0, ADDED_CARDS));
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleShowMore() {
    setRenderedCards(articles.current.slice(0, renderedCards.length + ADDED_CARDS));
  }

  ///////////////////////////////////////////////
  /* CARDS INTERACTIONS HANDLERS: SAVE, DELETE */
  const handleSave = (card) => {
    mainApi
      .saveArticle(token, card, currentKeyword)
      .then((res) => {
        setCurrentUser((currentUser) => ({
          ...currentUser,
          savedArticles: [res, ...currentUser.savedArticles]
        }));
      })
      .catch((err) => console.log(err));
  }

  function handleDelete(card) {
    mainApi
      .deleteArticle(token, card)
      .then((res) => {
        setCurrentUser((currentUser) => ({
          ...currentUser,
          savedArticles: currentUser.savedArticles.filter((currArticle) => currArticle._id !== card._id)
        }))
      })
      .catch((err) => console.log(err));
  }

  function handleUnauthorizedSaveClick() {
    setIsRegisterPopupOpen(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          { /* MAIN PAGE AVAILABLE FOR EACH USER */}
          <Route
            path='/'
            element={
              <Main
                isLoggedIn={isLoggedIn}
                onSignInClick={handleSignInButtonClick}
                isLoading={isLoading}
                articles={renderedCards}
                onLogout={handleLogout}
                onSearch={handleSearch}
                onShowMore={handleShowMore}
                wasSearch={wasSearch}
                onSave={handleSave}
                showMoreButtonVisible={showMoreButtonVisible}
                onDelete={handleDelete}
                onUnauthorizedClick={handleUnauthorizedSaveClick} />
            } />

          {/* ONLY AUTHORIZED USERS ACCESS */}
          <Route
            path='/saved-news'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews
                  onLogout={handleLogout}
                  onDelete={handleDelete} />
              </ProtectedRoute>
            } />

          {/* REST OF PATHS A REDIRECTED TO THE MAIN PAGE */}
          <Route path='*' element={<Navigate to='/' />} />
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
          onRegister={handleRegister}
          isCommonError={registerError} />
        <SuccessPopup
          isOpen={isSuccessPopupOpen}
          onClose={closeAllPopups}
          onSignInClick={handleSignInButtonClick} />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
