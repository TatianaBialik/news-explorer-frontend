import './CardList.css';
import Card from '../Card/Card';
import { useLocation } from 'react-router-dom';


function CardList({ articles }) {
  const location = useLocation();

  return (
    <section className='cardlist'>
      <h2 className="cardlist__title">Search results</h2>
      <ul className="cardlist__list">
        {articles.map((article) => (
          <Card card={article} />
        ))}
      </ul>
      <button className='cardlist__show-more-button'>Show more</button>
    </section>
  )
}

export default CardList;