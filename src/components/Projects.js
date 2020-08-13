import React from 'react';
import rubyProject from '../images/ruby-project.jpg';
import javascriptProject from '../images/javascript-project.jpg';
import portfolioProject from '../images/portfolio-project.jpg';
import javaProject from '../images/java-project.jpg';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('nav').style.top = '0';
  } else {
    document.querySelector('nav').style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;
};

const Projects = () => (
  <>
    <section className="projects">
      <div className="projects-title">
        <h2>Projects</h2>
      </div>
      <div className="projects-items">
        <div className="projects-item">
          <img src={rubyProject} alt="project screenshot"></img>
          <div className="projects-item_description">
            <h4>CodeClan: Ruby Project</h4>
            <p>Made using Ruby, Sinatra, PostgreSQL, HTML & CSS</p>
            <div>
              <a href="https://github.com/grford15/Gallery_Project">
                <FaGithub />
              </a>
              <a href="https://gallery-app-18.herokuapp.com/">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="projects-item">
          <img src={javaProject} alt="project screenshot"></img>
          <div className="projects-item_description">
            <h4>CodeClan: Java Project</h4>
            <p>Made using Java, Hibernate, PostgreSQL, HTML & CSS</p>
            <div>
              <a href="https://github.com/grford15/RestaurantProject">
                <FaGithub />
              </a>
              <a href="http://teamgrebi-restaurantapp.herokuapp.com/bookings">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="projects-item">
          <img src={javascriptProject} alt="project screenshot"></img>
          <div className="projects-item_description">
            <h4>CodeClan: JavaScript Project</h4>
            <p>Made using React, JavaScript, API, HTML, CSS</p>
            <div>
              <a href="https://github.com/grford15/Group_JavaScript_Project">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="projects-item">
          <img src={portfolioProject} alt="project screenshot"></img>
          <div className="projects-item_description">
            <h4>Personal: Portfolio Website</h4>
            <p>Made using React, JavaScript, HTML, CSS</p>
            <div>
              <a href="https://github.com/grford15/turbo-engine">
                <FaGithub />
              </a>
              <a href="https://greg-rutherford.com">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Projects;
