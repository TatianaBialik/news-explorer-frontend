import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import SavedCardsList from '../SavedCardsList/SavedCardsList';

function SavedNews({ onLogout, onNewsLoading, onDelete }) {
  return (
    <>
      <SavedNewsHeader
        onLogout={onLogout} />
      <SavedCardsList onDelete={onDelete} />
      <Footer />
    </>
  )
}

export default SavedNews;