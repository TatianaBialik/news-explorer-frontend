import './NothingFound.css';
import notFoundIcon from '../../images/not-found.svg';
function NothingFound() {
  return (
    <section className="nothing-found">
      <img className="nothing-found__icon" src={notFoundIcon} alt="Nothing Found" />
      <h2 className="nothing-found__title">Nothing found</h2>
      <p className="nothing-found__text">Sorry, but nothing matched your search terms.</p>
    </section>
  )
};

export default NothingFound;