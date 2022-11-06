import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { articles } from '../../utils/temp_consts';
import CardList from '../CardList/CardList';
import Footer from '../Footer/Footer';
import SavedCardsList from '../SavedCardsList/SavedCardsList';

function SavedNews() {
  return (
    <>
      <SavedNewsHeader username='Elise' articles={articles} />
      <SavedCardsList articles={ articles} />
      <Footer />
    </>
  )
}

export default SavedNews;