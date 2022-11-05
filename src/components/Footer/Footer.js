import './Footer.css';
import githubIcon from '../../images/github.svg';
import fbIcon from '../../images/fb.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&#169; {new Date().getFullYear()} Supersite, Powered by News API</p>
      <div className="footer__navigation">
        <div className="footer__links">
          <a href="#" className="footer__link">Home</a>
          <a href="#" className="footer__link">Practicum by Yandex</a>
        </div>
        <div className="footer__external-resources">
          <a href="#" className="footer__github">
            <img className="footer__github-icon" src={githubIcon} />
          </a>
          <a href="#" className="footer__facebook">
            <img className="footer__facebook-icon" src={fbIcon} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;