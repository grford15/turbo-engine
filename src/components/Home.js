import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = () => (
  <>
    <section className="home">
      <h1 className="home-name">
        Greg <span className="home-name_last">Rutherford</span>
      </h1>
      <h2>Software Developer</h2>
      <div className="social-icons">
        <a href="https://github.com/grford15">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/greg-rutherford/">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </section>
  </>
);

export default Home;
