import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import SavedCardsList from '../SavedCardsList/SavedCardsList';
import { useEffect } from 'react';

function SavedNews({ username, articles, onLogout, onNewsLoading, onDelete }) {
  return (
    <>
      <SavedNewsHeader 
        username={username} 
        articles={articles} 
        onLogout={onLogout} />
      <SavedCardsList articles={articles} onDelete={onDelete} />
      <Footer />
    </>
  )
}

export default SavedNews;