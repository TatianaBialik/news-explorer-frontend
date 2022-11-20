import './CardList.css';
import Card from '../Card/Card';

function CardList({ 
  articles, 
  isLoggedIn, 
  onSaveClick, 
  savedArticles, 
  onShowMore 
}) {
  return (
    <section className='cardlist'>
      <h2 className="cardlist__title">Search results</h2>
      <ul className="cardlist__list">
        {articles.map((article, i) => (
          <Card 
            key={i} 
            card={article} 
            isLoggedIn={isLoggedIn} 
            onSave={onSaveClick}
            savedArticles={savedArticles} />
        ))}
      </ul>
      <button 
        className='cardlist__show-more-button'
        onClick={onShowMore}>Show more</button>
    </section>
  )
}

export default CardList;