import './CardList.css';
import Card from '../Card/Card';

function CardList({ articles }) {
  return (
    <section className='cardlist'>
      <h2 className="cardlist__title">Search results</h2>
      <ul className="cardlist__list">
        {articles.map((article, i) => (
          <Card key={i} card={article} />
        ))}
      </ul>
      <button className='cardlist__show-more-button'>Show more</button>
    </section>
  )
}

export default CardList;