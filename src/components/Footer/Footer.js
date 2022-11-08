import './Footer.css';
import githubIcon from '../../images/github.svg';
import fbIcon from '../../images/fb.svg';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&#169; {new Date().getFullYear()} Supersite, Powered by News API</p>
      <div className="footer__navigation">
        <div className="footer__links">
          <NavLink to='/' className="footer__link">Home</NavLink>
          <a 
            href="https://practicum.com/en-isr" 
            className="footer__link">
              Practicum by Yandex
          </a>
        </div>
        <div className="footer__external-resources">
          <a href="https://github.com/TatianaBialik" className="footer__github">
            <img className="footer__github-icon" src={githubIcon} />
          </a>
          <a href="https://www.facebook.com/tiana.tana/" className="footer__facebook">
            <img className="footer__facebook-icon" src={fbIcon} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;