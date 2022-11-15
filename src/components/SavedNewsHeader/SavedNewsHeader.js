import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation';

function SavedNewsHeader({ articles, username, onLogout }) {
  return (
    <header className="saved-header">
      <Navigation isLoggedIn={true} username={username} onLogout={onLogout} />

      <div className="saved-header__info">
        <p className="saved-header__subtitle">Saved articles</p>
        <h2 className="saved-header__title">{username}, you have {articles.length} saved articles</h2>
        <p className="saved-header__keywords-block">
          By keywords: 
          <span className="saved-header__keywords">
            {articles[0].keyword}, {articles[1].keyword}, and {articles.length-2} other
          </span>
        </p>
      </div>
    </header>
  )
};

export default SavedNewsHeader;