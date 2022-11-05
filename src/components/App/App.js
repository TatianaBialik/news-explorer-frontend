import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import CardList from '../CardList/CardList';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';

function App() {
  return (
    <>
      <Header></Header>
      <CardList></CardList>
      <Preloader></Preloader>
      <NothingFound></NothingFound>
      <About></About>
      <Footer></Footer>
    </>
  )
}

export default App;
