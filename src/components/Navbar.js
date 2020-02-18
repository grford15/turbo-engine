import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  state = {
    displayMenu: false,
  };

  menuToggle = () => {
    this.setState(prevState => ({
      displayMenu: !prevState.displayMenu,
    }));
  };

  render() {
    const { displayMenu } = this.state;
    return (
      <>
        <nav className={displayMenu ? 'nav open' : 'nav'}>
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
          <div className="menu-btn">
            <div onClick={this.menuToggle}>
              <span
                className={
                  displayMenu
                    ? 'menu-btn_burger open'
                    : 'menu-btn_burger'
                }
              ></span>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
