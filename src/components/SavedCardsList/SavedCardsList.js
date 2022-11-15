import Card from '../Card/Card';

function SavedCardsList({articles}) {
  return (
    <section className="cardlist">
      <ul className="cardlist__list">
        {articles && articles.map((article, i) => (
          <Card card={article} key={i} />
        ))}
      </ul>
    </section>
    
  )
};

export default SavedCardsList;