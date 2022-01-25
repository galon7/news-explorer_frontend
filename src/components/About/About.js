import React from 'react';
import './About.css';
import alon from '../../images/Alon.png';

function About() {
  return (
    <section className="about">
      <img src={alon} alt="Author" className="about__image" />
      <article className="about__details">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Hi, my name is Alon Goykhman and I'm a web development student from Tel Aviv, Israel
        </p>
        <p className="about__text">I study in the Practicum100 full-time program.</p>
      </article>
    </section>
  );
}

export default About;
