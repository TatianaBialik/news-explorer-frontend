import './Card.css';
import testimage from '../../images/test-image.png';
import testimage2 from '../../images/image_07.png';

function Card() {

  return (
    <>

<li className="card">
      <img className="card__image" src={testimage}/>
      <button className="card__save-button" />
      <div className="card__sign-label">
        <p className="card__label-text">Sign to save articles</p>
      </div>
      <div className="card__description">
        <p className="card__date">November 4, 2020</p>
        <h3 className="card__title">Everyone Needs a Special 'Sit Spot' in Nature</h3>
        <p className="card__text">
          Ever since I read Richard Louv's influential book, "Last Child in the Woods," 
          the idea of having a special "sit spot" has stuck with me. This advice, 
          which Louv attributes to nature educator Jon Young, is for both adults and children to find...
        </p>
        <p className="card__source">treehugger</p>
      </div>
    </li>
    <li className="card">
      <img className="card__image" src={testimage2}/>
      <button className="card__save-button" />
      <div className="card__sign-label">
        <p className="card__label-text">Sign to save articles</p>
      </div>
      <div className="card__description">
        <p className="card__date">November 4, 2020</p>
        <h3 className="card__title">Everyone Needs a Special 'Sit Spot' in Nature</h3>
        <p className="card__text">
        We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.
        </p>
        <p className="card__source">treehugger</p>
      </div>
    </li>
    </>
    
  )
}

export default Card;