import './Card.css';
import { useLocation } from 'react-router-dom';

function Card({ card }) {
  const location = useLocation();

  return (
    <li className="card">
      <img className="card__image" src={ card.image }/>
      {location.pathname === '/' ? (
        <button className="card__button card__button_save" />
      ) : (
        <button className="card__button card__button_delete" />
      )}
      
      <div className="card__label card__label_sign-in">
        <p className="card__label-text">
          {location.pathname === '/' ? (
            'Sign to save articles'
          ) : (
            'Remove from saved'
          )}
        </p>
      </div>
      {location.pathname === '/saved' && (
        <div className="card__label card__label_keyword">
          <p className="card__label-text">{ card.keyword }</p>
        </div>
      )}

      <div className="card__description">
        <p className="card__date">{ card.date }</p>
        <h3 className="card__title">{ card.title }</h3>
        <p className="card__text">{ card.text }</p>
        <p className="card__source">{ card.source }</p>
      </div>
    </li>
  )
}

export default Card;