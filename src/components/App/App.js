import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import CardList from '../CardList/CardList';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';
import Popup from '../Popup/Popup';

function App() {
  return (
    <>
      <Header></Header>
      <CardList></CardList>
      <Preloader></Preloader>
      <NothingFound></NothingFound>
      <About></About>
      <Footer></Footer>
      <Popup name='Sign up' isOpen='true'>
        <label className='popup__label'>Email</label>
        <input type='text' className='popup__input' placeholder='Enter email'></input>
        <span className="popup__error">ppp</span>
        <label className='popup__label'>Password</label>
        <input type='password' className='popup__input' placeholder='Enter password'></input>
      </Popup>
    </>
  )
}

export default App;
