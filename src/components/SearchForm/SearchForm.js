import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <input className='search-form__input' type="text" placeholder="Enter topic"></input>
      <button className='search-form__submit-button'>Search</button>
    </form>
  )
}

export default SearchForm;