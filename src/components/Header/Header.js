import './Header.css';
import Navigation from '../Navigation/Navigation';
import FormSection from '../FormSection/FormSection';

function Header() {
  return (
    <header className="header">
      <Navigation></Navigation>
      <FormSection></FormSection>
    </header>
  )
};

export default Header;
