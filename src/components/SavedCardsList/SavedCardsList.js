import './SavedCardsList.css';
import Card from '../Card/Card';

function SavedCardsList({articles}) {
  return (
    <section className="cardlist">
      <ul className="cardlist__list">
        {articles.map((article) => (
          <Card card={article} />
        ))}
      </ul>
    </section>
    
  )
};

export default SavedCardsList;