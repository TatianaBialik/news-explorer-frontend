import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';

function Main({ 
  isLoggedIn, 
  username, 
  onSignInClick,
  isLoading,
  articles,
  onLogout,
  onSaveClick
 }) {
  return (
    <main className="main">
      <Header 
        isLoggedIn={isLoggedIn} 
        username={username} 
        onSignInClick={onSignInClick}
        onLogout={onLogout} />
      {isLoading && (
        <Preloader />
      )}
      {articles.length === 0 ? (
        <NothingFound />
      ) : (
        <CardList articles={articles} onSaveClick={onSaveClick} isLoggedIn={isLoggedIn} />
      )}
      
      <About />
      <Footer />
    </main>
  )
};

export default Main;