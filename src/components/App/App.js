import { useState, useEffect, useRef } from 'react';
import { Route, Routes, Redirect, useHistory, Navigate } from 'react-router-dom';

import Main from '../Main/Main';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import SavedNews from '../SavedNews/SavedNews';
import { cards } from '../../utils/temp_consts';
import * as mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SavedNewsContext from '../../contexts/SavedNewsContext';
import search from '../../utils/NewsApi';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [articles, setArticles] = useState([]);
  const articles = useRef([]);
  const [renderedCards, setRenderedCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem('jwt'));
  const [savedNews, setSavedNews] = useState([]);
  const [wasSearch, setWasSearch] = useState(false);
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [registerError, setRegisterError] = useState(false);
  const [showMoreButtonVisible, setShowMoreButtonVisible] = useState(true);

  const ADDED_CARDS = 3;

  function firstLeterToUpperCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // const history = useHistory();

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
            console.log(res);
          }
        })
        .catch((err) => console.log(err));
    };
  }, [token]);

  /////////////////////////////////////////
  /* SAVED NEWS LOADING WHEN PAGE LOADED */
  // function getSavedNews() {
  //   mainApi
  //     .getArticles(token)
  //     .then((res) => {
  //       setSavedNews(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    if (token) {
      mainApi
        .getArticles(token)
        .then((res) => {
          setCurrentUser((currentUser) => ({ ...currentUser, savedArticles: res }))
        })
    }
  }, [isLoggedIn]);

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

  ///////////////////////////////////////////////////////////
  /* AUTHORIZATION: REGISTER, LOGIN/LOGOUT, TOKEN CHECKING */
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
    setCurrentUser('');
    localStorage.removeItem('jwt');
    setToken('');
    setIsLoginPopupOpen(true);
    // history.push('/');
  };

  //////////////////////////////////////
  /* SEARCH ARTICLES AND RENDER CARDS */
  const handleSearch = (keyword) => {
    setIsLoading(true);
    // setRenderedCards([]);
    setShowMoreButtonVisible(true);
    setCurrentKeyword(firstLeterToUpperCase(keyword));
    search(keyword)
      .then((res) => {
        setWasSearch(true);
        if (res.articles) {
          articles.current = res.articles;
          // setArticles(res.articles)
          // console.log(articles)
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
    // if (articles.current.length === renderedCards.length) {
    //   console.log('xxx')
    //   setShowMoreButtonVisible(false);
    // }
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
        // setSavedNews([...savedNews, res]);
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {/* <SavedNewsContext.Provider value={savedNews}> */}
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
                // savedArticles={savedNews}
                onSearch={handleSearch}
                onShowMore={handleShowMore}
                wasSearch={wasSearch}
                onSave={handleSave}
                showMoreButtonVisible={showMoreButtonVisible}
                onDelete={handleDelete} />
            } />

          {/* ONLY AUTHORIZED USERS ACCESS */}
          <Route path='/saved-news' element={
            isLoggedIn ? (
              <SavedNews
                // articles={savedNews}
                onLogout={handleLogout}
                // onNewsLoading={getSavedNews}
                onDelete={handleDelete} />
            ) : (
              <Navigate to='/' />
            )
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
      {/* </SavedNewsContext.Provider> */}
    </CurrentUserContext.Provider>
  )
}

export default App;
