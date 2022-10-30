import './FormSection.css';
import SearchForm from '../SearchForm/SearchForm';

function FormSection() {
  return (
    <section className="form-section">
      <h1 className="form-section__title">What's going on in the world?</h1>
      <p className="form-section__subtitle">Find the latest news on any topic and save them in your personal account.</p>
      <SearchForm></SearchForm>
    </section>
  )
}

export default FormSection;
