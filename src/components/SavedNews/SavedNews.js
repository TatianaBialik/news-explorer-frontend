import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import SavedCardsList from '../SavedCardsList/SavedCardsList';
import { useEffect } from 'react';

function SavedNews({ onLogout, onNewsLoading, onDelete }) {
  return (
    <>
      <SavedNewsHeader
        // articles={articles} 
        onLogout={onLogout} />
      <SavedCardsList onDelete={onDelete} />
      <Footer />
    </>
  )
}

export default SavedNews;