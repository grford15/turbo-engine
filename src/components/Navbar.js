import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="nav">
    <ul className="menu-nav">
      <li className="menu-nav_item">
        <Link to="/">Home</Link>
      </li>
      <li className="menu-nav_item">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="menu-nav_item">
        <Link to="/contact">Contact Me</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
