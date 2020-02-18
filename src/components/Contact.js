import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <section className="contact">
    <h2>Contact Me</h2>
    <div className="contact-list">
      <div className="contact-email">
        <MdEmail value={{ className: 'contact-icons' }} />
        g.rutherford10@gmail.com
      </div>
      <div className="contact-phone">
        <MdPhone />
        07464484596
      </div>
      <div className="contact-socials">
        <a href="https://github.com/grford15">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/greg-rutherford/">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
