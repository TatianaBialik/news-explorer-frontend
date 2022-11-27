import './CardList.css';
import Card from '../Card/Card';
import { v4 as uuid } from 'uuid';

function CardList({ 
  articles, 
  isLoggedIn, 
  onSave, 
  savedArticles, 
  onShowMore,
  showMoreButtonVisible,
  onDelete,
  onUnauthorizedClick
}) {
  return (
    <section className='cardlist'>
      <h2 className="cardlist__title">Search results</h2>
      <ul className="cardlist__list">
        {articles.map((article, i) => (
          <Card 
            key={uuid()} 
            card={article} 
            isLoggedIn={isLoggedIn} 
            onSave={onSave}
            savedArticles={savedArticles}
            onDelete={onDelete}
            onUnauthorizedClick={onUnauthorizedClick} />
        ))}
      </ul>
      <button 
        className={`cardlist__show-more-button ${!showMoreButtonVisible && 'cardlist__show-more-button_hidden'}`}
        onClick={onShowMore}>Show more</button>
    </section>
  )
}

export default CardList;