import React, { Component } from 'react';
import './NavBar.css';
import { Row, Col, Navbar, NavItem } from 'react-materialize'
import { NavLink } from "react-router-dom";



class NavBar extends Component {
  render() {
    return (
      <nav className="nav-center" role="navigation">
          <div className="nav-wrapper container">
              <ul>
                  <li> <NavLink to="/">ABOUT</NavLink>   </li>
                  <li> <NavLink to="/projects">PROJECTS</NavLink>   </li>
              </ul>
          </div>
      </nav>

    );
  }
}

export default NavBar;
