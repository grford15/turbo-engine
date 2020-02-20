import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <>
    <section className="home">
      <h1 className="home-name">
        Greg <span className="home-name_last">Rutherford</span>
      </h1>
      <h2>Software Developer based in Glasgow</h2>
      <Link to="/about" id="link">
        Find out more about me
      </Link>
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
