import React from 'react';
import projectImage from '../images/project-image.jpg';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

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
            <h4>Project title</h4>
            <div>
              <a href="">
                <FaGithub value={{ className: 'social-icons' }} />
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="projects-item">
          <img src={projectImage} alt="project screenshot"></img>
          <div className="projects-item_description">
            <h4>Project title</h4>
            <div>
              <a href="">
                <FaGithub />
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="projects-item">
          <img src={projectImage} alt="project screenshot"></img>
          <div className="projects-item_description">
            <h4>Project title</h4>
            <div>
              <a href="">
                <FaGithub />
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
