import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';

function Main({
  isLoggedIn,
  onSignInClick,
  isLoading,
  articles,
  onLogout,
  savedArticles,
  onSearch,
  onShowMore,
  wasSearch,
  onSave,
  showMoreButtonVisible,
  onDelete
}) {
  const blockState = () => {
    if (isLoading) return (<Preloader />);
    if (articles.length === 0) {
      return (<NothingFound />);
    }
    return (<CardList
      articles={articles}
      onSave={onSave}
      isLoggedIn={isLoggedIn}
      savedArticles={savedArticles}
      onShowMore={onShowMore}
      showMoreButtonVisible={showMoreButtonVisible}
      onDelete={onDelete} />);
  }

  return (
    <main className="main">
      <Header
        isLoggedIn={isLoggedIn}
        onSignInClick={onSignInClick}
        onLogout={onLogout}
        onSearch={onSearch} />

      {wasSearch && blockState()}
      
      <About />
      <Footer />
    </main>
  )
};

export default Main;