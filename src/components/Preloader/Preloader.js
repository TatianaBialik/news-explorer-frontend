import './Preloader.css';

function Preloader() {
  return (
    <section className="preloader-block">
      <i className="preloader-block__circle" />
      <p className="preloader-block__text">Searching for news...</p>
    </section>
  )
};

export default Preloader;