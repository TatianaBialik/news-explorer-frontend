import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import { articles } from '../../utils/temp_consts';

function Main() {
  return (
    <main className="main">
      <Header isLoggedIn='false' username='Elise' />
      <CardList articles={articles} />
      <About />
      <Footer />
    </main>
  )
};

export default Main;