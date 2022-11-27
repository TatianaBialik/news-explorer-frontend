import './About.css';
import photo from '../../images/photo.png';

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
            Hello, my name is Tatiana, I am Web Developer and here is my final project of Practicum-100 course.
            You can find the latest world news about topics you interested in, make your own account, log in and save the most interesting articles.
            Enjoy!
          </p>
          <p className="about__paragraph">
            Frontend part made using ReactJS.<br />
            Backend part (user authentication and saved articles storing): Node.js, MongoDB.<br />
            You can find more information on my Github repository (link in the footer below).
          </p>
          <p className="about__paragraph">
            For last few months I was taking the Web Development course and found out that I really love this sphere and wish to move on.
            During the course I faced tons of challenges and each time it was like exciting adventure, to open new horizons, gain new skills.
            And now I'm looking for the new opportunities to apply my knowledges and improve my skills challenging myself more and more.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
