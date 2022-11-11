import './About.css';
import photo from '../../images/photo.jpg'

function About() {
  return (
    <section className="about">
      <div className="about__photo-wrapper">
        <img src={photo} className="about__photo" alt='Page author photo' />
      </div>
      <div className="about__info-block">
        <h2 className="about__title">About the author</h2>
        <div className="about__info">
          <p className="about__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt 
            nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
          </p>
          <p className="about__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt 
            nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
          </p>
          <p className="about__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt 
            nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
