import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/janindu.jpeg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content" style={{ fontSize: "18px" }}>
          <div className="about__cards">
          </div>
          <p>As a final year undergraduate student pursuing a BSc (Hons) degree in Software Engineering, I possess a strong enthusiasm for responsive full stack web development and Flutter mobile app development.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro






