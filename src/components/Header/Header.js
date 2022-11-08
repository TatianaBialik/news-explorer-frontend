import './Header.css';
import Navigation from '../Navigation/Navigation';
import FormSection from '../FormSection/FormSection';

function Header({ isLoggedIn, username }) {
  return (
    <header className="header">
      <Navigation isLoggedIn={isLoggedIn} username={username} />
      <FormSection />
    </header>
  )
};

export default Header;
