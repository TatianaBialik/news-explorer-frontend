import Card from '../Card/Card';

function SavedCardsList({ articles, onDelete }) {
  return (
    <section className="cardlist">
      <ul className="cardlist__list">
        {articles && articles.map((article, i) => (
          <Card card={article} key={i} onDelete={onDelete} />
        ))}
      </ul>
    </section>
    
  )
};

export default SavedCardsList;