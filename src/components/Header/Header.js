import './Header.css';
import Navigation from '../Navigation/Navigation';
import FormSection from '../FormSection/FormSection';

function Header() {
  return (
    <header className="header">
      <Navigation isLoggedIn={true} username='Elise' />
      <FormSection />
    </header>
  )
};

export default Header;
