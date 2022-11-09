import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { articles } from '../../utils/temp_consts';
import Footer from '../Footer/Footer';
import SavedCardsList from '../SavedCardsList/SavedCardsList';

function SavedNews({ username }) {
  return (
    <>
      <SavedNewsHeader username={username} articles={articles} />
      <SavedCardsList articles={ articles} />
      <Footer />
    </>
  )
}

export default SavedNews;