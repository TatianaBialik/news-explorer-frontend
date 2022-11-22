import './Card.css';
import { useLocation } from 'react-router-dom';
import { useState, useContext, useEffect, useRef } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Card({
  card,
  isLoggedIn,
  savedArticles,
  onDelete,
  onSave,
  onUnauthorizedClick }) {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    (currentUser.savedArticles && currentUser.savedArticles.some((article) => article.link === card.url))
      && setIsSaved(true)
  }, []);

  function setDateString() {
    const date = new Date(card.publishedAt || card.date);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  function handleSaveClick(e) {
    e.preventDefault();
    setIsSaved((state) => !state);
    if (isSaved) {
      onDelete(currentUser.savedArticles.find((article) => article.link === card.url))
    } else {
      onSave(card)
    }
  }

  function handleUnauthorizedSaveClick(e) {
    e.preventDefault();
    onUnauthorizedClick();
  }

  function handleDelete(e) {
    e.preventDefault();
    onDelete(card);
  }

  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);
  }

  return (
    <li className="card">
      <a
        href={card.url || card.link}
        className="card__link"
        target='_blank'
        rel="noopener noreferrer">
        <img
          className="card__image"
          src={card.urlToImage || card.image}
          alt={`The ${card.title} article illustration`} />
        {location.pathname === '/' ? (
          <button
            className={`card__button card__button_type_save ${isSaved && 'card__button_type_saved'} ${(!isSaved && isHover) && 'card__button_type_hover'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={isLoggedIn ? handleSaveClick : handleUnauthorizedSaveClick} />
        ) : (
          <button
            className="card__button card__button_type_delete"
            onClick={handleDelete} />
        )}

        {((location.pathname === '/' && !isLoggedIn) || location.pathname === '/saved-news') && (
          <div className="card__label card__label_type_sign-in">
            <p className="card__label-text">
              {location.pathname === '/' ? (
                'Sign to save articles'
              ) : (
                'Remove from saved'
              )}
            </p>
          </div>
        )}

        {location.pathname === '/saved-news' && (
          <div className="card__label card__label_type_keyword">
            <p className="card__label-text">{card.keyword}</p>
          </div>
        )}

        <div className="card__description">
          <p className="card__date">{setDateString()}</p>
          <h3 className="card__title">{card.title}</h3>
          <p className="card__text">{card.description || card.text}</p>
          <p className="card__source">{card.source.name || card.source}</p>
        </div>
      </a>
    </li>
  )
}

export default Card;