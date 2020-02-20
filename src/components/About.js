import React from 'react';
import {
  DiJsBadge,
  DiNodejs,
  DiJava,
  DiRuby,
  DiHtml5,
  DiCss3,
  DiPostgresql,
  DiReact,
} from 'react-icons/di';
import './About.css';

const About = () => (
  <section className="about">
    <div className="about-title">
      <h2>About Me</h2>
    </div>
    <div className="about-blurb">
      <h3>Bio</h3>
      <p>Here's some stuff about me </p>
      <h3>Skillset</h3>
      <div className="tech-icons">
        <DiJsBadge />
        <DiNodejs />
        <DiReact />
        <DiJava />
        <DiRuby />
        <DiHtml5 />
        <DiCss3 />
        <DiPostgresql />
      </div>
    </div>
  </section>
);

export default About;
