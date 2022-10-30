import './About.css';
import photo from '../../images/photo.jpg'

function About() {
  return (
    <section className="about">
      <div className="about__photo-wrapper">
        <img src={photo} className="about__photo" />
      </div>
      <div className="about__info-block">
        <h2 className="about__title">About the author</h2>
        <p className="about__info">Info about the author</p>
      </div>
    </section>
  )
}

export default About;
