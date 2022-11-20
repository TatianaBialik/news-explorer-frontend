import './Header.css';
import Navigation from '../Navigation/Navigation';
import FormSection from '../FormSection/FormSection';

function Header({
  isLoggedIn,
  username,
  onSignInClick,
  onLogout,
  onSearch
}) {
  return (
    <header className="header">
      <Navigation
        isLoggedIn={isLoggedIn}
        username={username}
        onSignInClick={onSignInClick}
        onLogout={onLogout} />
      <FormSection onSearch={onSearch} />
    </header>
  )
};

export default Header;
