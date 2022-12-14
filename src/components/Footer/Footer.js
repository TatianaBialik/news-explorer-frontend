import './Footer.css';
import githubIcon from '../../images/github.svg';
import fbIcon from '../../images/fb.svg';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&#169; {new Date().getFullYear()} Supersite, Powered by News API</p>
      <nav className="footer__navigation">
        <div className="footer__links">
          <NavLink to='/' className="footer__link">Home</NavLink>
          <a 
            href="https://practicum.com/en-isr" 
            className="footer__link"
            target='_blank'
            rel="noopener noreferrer">
              Practicum by Yandex
          </a>
        </div>
        <div className="footer__external-resources">
          <a 
            href="https://github.com/TatianaBialik/news-explorer-frontend" 
            className="footer__github" 
            target='_blank' 
            rel="noopener noreferrer">
            <img className="footer__github-icon" src={githubIcon} alt='Github' />
          </a>
          <a 
            href="https://www.facebook.com/tiana.tana/" 
            className="footer__facebook" 
            target='_blank' 
            rel="noopener noreferrer">
            <img className="footer__facebook-icon" src={fbIcon} alt='Facebook' />
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer;