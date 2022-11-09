import './Navigation.css';
import { useLocation, NavLink } from 'react-router-dom';
import { useState } from 'react';
import logout_black from '../../images/logout_black.svg';
import logout_white from '../../images/logout_white.svg';

function Navigation({ isLoggedIn, username }) {
  const location = useLocation();
  const navClass = location.pathname === '/' ? '' : '_saved';
  const [isBurgerButtonActive, setIsBurgerButtonActive] = useState(false);

  return (
    <div className="navigation">
      {/* MOBILE NAVIGATION MENU */}
      {isBurgerButtonActive ? (
        /* OPEN MOBILE NAVIGATION MENU */
        <div className="navigation__burger">
          <div className="navigation__top">
            <p className={`navigation__logo navigation__logo`}>NewsExplorer</p>
            <button className="navigation__close-menu-button" />
          </div>
          
          <div className="navigation__links_active">
            <NavLink to='/' className={`navigation__link navigation__link`}>Home</NavLink>
            <NavLink to='/saved' className={`navigation__link navigation__link`}>Saved articles</NavLink>

            { isLoggedIn ? (
              <button className={`navigation__header-button navigation__header-button_logout navigation__header-button`}>
                { username }
                <img src={ logout_white } />
              </button>
              ) : (
                <button className={`navigation__header-button navigation__header-button_login navigation__header-button`}>Sign in</button>
              )}
          </div>
        </div>
      ) : (
        /* CLOSE MOBILE NAVIGATION MENU (BURGER) */
        <>
          <p className={`navigation__logo navigation__logo` + navClass}>NewsExplorer</p>
          <button className={`navigation__burger-menu navigation__burger-menu` + navClass} />
        </>
      )}

      {/* REGULAR NAVIGATION MENU */}
      <nav className="navigation__links">
        <NavLink to='/' className={`${navClass === '' && 'navigation__link_location'} navigation__link navigation__link` + navClass}>Home</NavLink>
        <NavLink to='/saved' className={`${navClass === '_saved' && 'navigation__link_location'} navigation__link navigation__link` + navClass}>Saved articles</NavLink>
        { isLoggedIn ? (
          <button className={`navigation__header-button navigation__header-button_logout navigation__header-button` + navClass}>
            { username }
            <img src={ location.pathname === '/' ? logout_white : logout_black } />
          </button>
        ) : (
          <button className={`navigation__header-button navigation__header-button_login navigation__header-button` + navClass}>Sign in</button>
        )}
      </nav>
    </div>
  )
};

export default Navigation;