import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import SavedCardsList from '../SavedCardsList/SavedCardsList';

function SavedNews({ username, articles, onLogout }) {
  return (
    <>
      <SavedNewsHeader 
        username={username} 
        articles={articles} 
        onLogout={onLogout} />
      <SavedCardsList articles={ articles } />
      <Footer />
    </>
  )
}

export default SavedNews;