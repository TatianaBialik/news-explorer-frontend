import './Navigation.css';
import { useLocation, NavLink } from 'react-router-dom';
import { useState } from 'react';
import logout_black from '../../images/logout_black.svg';
import logout_white from '../../images/logout_white.svg';

function Navigation({ 
  isLoggedIn, 
  username, 
  onSignInClick, 
  onLogout }) {
  const location = useLocation();
  const navClass = location.pathname === '/' ? '' : '_saved';
  const [isBurgerButtonActive, setIsBurgerButtonActive] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsBurgerButtonActive(true);
  }

  const handleCloseMenuClick = () => {
    setIsBurgerButtonActive(false);
  }

  return (
    <div className="navigation">
      {/* MOBILE NAVIGATION MENU */}
      {isBurgerButtonActive ? (
        /* OPENED MOBILE NAVIGATION MENU */
        <div className="navigation__burger">
          <div className="navigation__top">
            <p className={`navigation__logo`}>NewsExplorer</p>
            <button className="navigation__close-menu-button" onClick={handleCloseMenuClick} />
          </div>
          
          <div className="navigation__links_active">
            <NavLink to='/' className='navigation__link'>Home</NavLink>
            <NavLink to='/saved-news' className='navigation__link'>Saved articles</NavLink>

            { isLoggedIn ? (
              <button 
                className={`navigation__header-button navigation__header-button_function_logout`}
                onClick={onLogout}>
                { username }
                <img src={ logout_white } alt='Exit icon' />
              </button>
              ) : (
                <button 
                  type='button'
                  className={`navigation__header-button navigation__header-button_function_login`}
                  onClick={onSignInClick}>Sign in</button>
              )}
          </div>
        </div>
      ) : (
        /* CLOSED MOBILE NAVIGATION MENU (BURGER) */
        <>
          <p className={`navigation__logo navigation__logo` + navClass}>NewsExplorer</p>
          <button className={`navigation__burger-menu navigation__burger-menu` + navClass} onClick={handleBurgerMenuClick} />
        </>
      )}

      {/* REGULAR NAVIGATION MENU */}
      <nav className="navigation__links">
        <NavLink to='/' className={`${navClass === '' && 'navigation__link_location'} navigation__link navigation__link` + navClass}>Home</NavLink>
        
        { isLoggedIn ? (
          <>
            <NavLink to='/saved-news' className={`${navClass === '_saved' && 'navigation__link_location'} navigation__link navigation__link` + navClass}>Saved articles</NavLink>
            <button 
              className={`navigation__header-button navigation__header-button_function_logout navigation__header-button` + navClass}
              onClick={onLogout}>
              { username }
              <img src={ location.pathname === '/' ? logout_white : logout_black } alt='Exit icon' />
            </button>
          </>
        ) : (
          <button 
          type='button'
          className={`navigation__header-button navigation__header-button_function_login navigation__header-button` + navClass}
          onClick={onSignInClick}>Sign in</button>
        )}
      </nav>
    </div>
  )
};

export default Navigation;