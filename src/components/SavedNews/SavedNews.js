import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import SavedCardsList from '../SavedCardsList/SavedCardsList';
import { useEffect } from 'react';

function SavedNews({ username, articles, onLogout, onNewsLoading }) {
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