import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import { articles } from '../../utils/temp_consts';

function SavedNews() {
  return (
    <SavedNewsHeader username='Elise' articles={articles} />
  )
}

export default SavedNews;