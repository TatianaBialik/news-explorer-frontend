import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

function SavedNewsHeader({ onLogout }) {
  const currentUser = useContext(CurrentUserContext);

  /* Create a string: first word is the most popular topic, the second one is on the second place.
  If there are 3 or less unique keywords print all of them.
  If there are more than 3 unique keywords 
  display the first and the second place and number of remaining keywords. */
  function makeHeaderString() {
    const keywords = currentUser.savedArticles.map((article) => article.keyword);
    const uniqueKeywords = [...new Set(keywords)];
    let sortedKeywords = [];

    // Find the number of occurences of each keyword 
    keywords.forEach((keyword) => {
      if (Object.keys(sortedKeywords).includes(keyword)) {
        sortedKeywords[keyword]++;
      } else {
        sortedKeywords[keyword] = 1;
      }
    });

    let max = 0;
    let maxKeyword = '';
    let secondMax = 0;
    let secondMaxKeyword;

    //If there are more than 1 keyword find the first and the second places
    if (uniqueKeywords.length > 1) {
      Object.keys(sortedKeywords).forEach((key) => {
        if (sortedKeywords[key] > max) {
          max = sortedKeywords[key];
          maxKeyword = key;
        }
      });

      for (let key of Object.keys(sortedKeywords)) {
        if (key === maxKeyword) {
          continue;
        }
        if (sortedKeywords[key] > secondMax) {
          secondMax = sortedKeywords[key];
          secondMaxKeyword = key;
        }
      }
    }

    //If there are exactly 3 words place the last one to the last place
    if (uniqueKeywords.length === 3) {
      uniqueKeywords[2] = uniqueKeywords.filter((keyword) => (keyword !== maxKeyword && keyword !== secondMaxKeyword))[0];
    }

    //Put the most popular keywords in the corresponding places
    if (maxKeyword) uniqueKeywords[0] = maxKeyword;
    if (secondMaxKeyword) uniqueKeywords[1] = secondMaxKeyword;

    //Return prepared string for the header
    return uniqueKeywords.length <= 3
      ? uniqueKeywords.join(', ')
      : maxKeyword + ', ' + secondMaxKeyword + ' and ' + (uniqueKeywords.length - 2) + ' more';
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