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
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { NavLink } from 'react-router-dom';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import SavedNews from '../SavedNews/SavedNews';

function App() {
  return (
    <SavedNews />
  )
}

export default App;
