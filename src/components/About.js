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
      <p>
        I am a largely self-taught software developer with a passion
        for front-end technologies.{' '}
      </p>
      <p>
        I have spent most of my time working with JavaScript, React,
        HTML & CSS as well as experience with other languages listed
        below during my time at CodeClan's bootcamp in Glasgow
      </p>
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
