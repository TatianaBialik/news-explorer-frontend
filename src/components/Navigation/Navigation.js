import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation">
      <p className="navigation__logo">NewsExplorer</p>
      <nav className="navigation__links">
        <NavLink className="navigation__link">Home</NavLink>
        <NavLink className="navigation__link">Saved articles</NavLink>
        <button className='navigation__enter-button'>Sign in</button>
      </nav>
    </div>
    
  )
};

export default Navigation;