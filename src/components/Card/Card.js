import './Card.css';
import testimage from '../../images/test-image.png';
import testimage2 from '../../images/image_07.png';

function Card({ card }) {

  return (
    <li className="card">
      <img className="card__image" src={ card.image }/>
      <button className="card__save-button" />
      <div className="card__sign-label">
        <p className="card__label-text">Sign to save articles</p>
      </div>
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