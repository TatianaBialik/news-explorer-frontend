import './Card.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Card({ card, isLoggedIn }) {
  const location = useLocation();

  function setDateString() {
    const date = new Date(card.publishedAt);
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

  return (
    <li className="card">
      <a
        href={card.url}
        className="card__link"
        target='_blank'
        rel="noopener noreferrer">
        <img
          className="card__image"
          src={card.urlToImage}
          alt={`The ${card.title} article illustration`} />
        {location.pathname === '/' ? (
          <button className={`card__button card__button_type_save`} />
        ) : (
          <button className="card__button card__button_type_delete" />
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
            {/* <p className="card__label-text">{card.keyword}</p> */}
          </div>
        )}

        <div className="card__description">
          <p className="card__date">{setDateString()}</p>
          <h3 className="card__title">{card.title}</h3>
          <p className="card__text">{card.content}</p>
          <p className="card__source">{card.source.name}</p>
        </div>
      </a>
    </li>
  )
}

export default Card;