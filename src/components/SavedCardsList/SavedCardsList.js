import Card from '../Card/Card';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

function SavedCardsList({ onDelete }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className="cardlist">
      <ul className="cardlist__list">
        {currentUser.savedArticles && currentUser.savedArticles.map((article, i) => (
          <Card card={article} key={article._id} onDelete={onDelete} />
        ))}
      </ul>
    </section>
    
  )
};

export default SavedCardsList;