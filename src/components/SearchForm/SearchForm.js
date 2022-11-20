import './SearchForm.css';
import useForm from '../../utils/useForm';

function SearchForm({ onSearch }) {
  const { values, handleChange } = useForm({ keyword: '' });

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(values.keyword);
  }
  return (
    <form 
      className="search-form"
      onSubmit={handleSubmit}>
      <input
        className='search-form__input'
        type="text"
        placeholder="Enter topic"
        name='keyword'
        onChange={handleChange}
        required></input>
      <button className='search-form__submit-button'>Search</button>
    </form>
  )
}

export default SearchForm;