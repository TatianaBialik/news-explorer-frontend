import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation';

function SavedNewsHeader() {
  return (
    <header className="saved-header">
      <Navigation isLoggedIn={true} username='Elise' />
    </header>
  )
};

export default SavedNewsHeader;