import React from 'react';
import projectImage from '../images/project-image.jpg';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
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
          <img src={projectImage} alt="project screenshot"></img>
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
          <img src={projectImage} alt="project screenshot"></img>
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
          <img src={projectImage} alt="project screenshot"></img>
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
          <img src={projectImage} alt="project screenshot"></img>
          <div className="projects-item_description">
            <h4>Personal: Generic Product Site</h4>
            <p>Made using JavaScript, HTML, CSS</p>
            <div>
              <a href="https://github.com/grford15/genericProductWebsite">
                <FaGithub />
              </a>
              <a href="https://generic-product-website.netlify.com/">
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
