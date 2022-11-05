import './Navigation.css';
import { useLocation, NavLink } from 'react-router-dom';
import logout_black from '../../images/logout_black.svg';
import logout_white from '../../images/logout_white.svg';

function Navigation({ isLoggedIn, username }) {
  const location = useLocation();
  const navClass = location.pathname === '/' ? '' : '_saved';

  return (
    <div className="navigation">
      <p className={`navigation__logo navigation__logo` + navClass}>NewsExplorer</p>
      <nav className="navigation__links">
        <NavLink className={`navigation__link navigation__link` + navClass}>Home</NavLink>
        <NavLink className={`navigation__link navigation__link` + navClass}>Saved articles</NavLink>
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