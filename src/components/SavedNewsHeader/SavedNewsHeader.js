import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

function SavedNewsHeader({ onLogout }) {
  const currentUser = useContext(CurrentUserContext);

  function makeHeaderString() {
    const keywords = currentUser.savedArticles.map((article) => article.keyword);
    // let sortedKeywords = [];
    // keywords.forEach((keyword) => {
    //   if (Object.keys(sortedKeywords).includes(keyword)) {
    //     sortedKeywords[keyword]++;
    //   } else {
    //     sortedKeywords[keyword] = 1;
    //   }
    // });
    const uniqueKeywords = [...new Set(keywords)];
    return uniqueKeywords.length <= 3
      ? uniqueKeywords.join(', ')
      : uniqueKeywords.slice(0, 2).join(', ') + ' and ' + (uniqueKeywords.length - 2) + ' more'
  }

  return (
    <header className="saved-header">
      <Navigation isLoggedIn={true} onLogout={onLogout} />

      <div className="saved-header__info">
        <p className="saved-header__subtitle">Saved articles</p>
        <h2 className="saved-header__title">{currentUser.name}, you have {currentUser.savedArticles.length} saved articles</h2>
        {currentUser.savedArticles.length > 0 && (
          <p className="saved-header__keywords-block">
            By keywords:{' '}
            <span className="saved-header__keywords">
              {makeHeaderString()}
            </span>
          </p>
        )}

      </div>
    </header>
  )
};

export default SavedNewsHeader;