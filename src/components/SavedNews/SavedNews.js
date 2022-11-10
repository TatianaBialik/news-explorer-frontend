import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import SavedCardsList from '../SavedCardsList/SavedCardsList';

function SavedNews({ username, articles }) {
  return (
    <>
      <SavedNewsHeader username={username} articles={articles} />
      <SavedCardsList articles={ articles } />
      <Footer />
    </>
  )
}

export default SavedNews;