import React, { Component } from "react";
import { Link } from "react-router-dom";

class InternalMenu extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="frame frame__top-left"></div>
        <div className="frame frame__bottom-left"></div>
        <div className="frame frame__bottom-right"></div>
        <div className="frame frame__top-right--alt"></div>
        <div className="frame__top-center">
          <ul className="topmenu__list">
            <li className="topmenu__list-item topmenu__left">
              <Link to="/about" className="topmenu__list-item--link">
                About
              </Link>
            </li>
            <li className="topmenu__list-item topmenu__left">
              <Link to="/contact" className="topmenu__list-item--link">
                Contact
              </Link>
            </li>
            <li className="topmenu__list-item topmenu__center">
              <Link to="/" className="topmenu__list-item">
                <img
                  className="img-responsive topmenu__list-item--image"
                  src="./images/logo.png"
                  alt="..."
                />
              </Link>
            </li>
            <li className="topmenu__list-item topmenu__right">
              <Link to="/blog" className="topmenu__list-item--link">
                Blog
              </Link>
            </li>
            <li className="topmenu__list-item topmenu__right">
              <Link to="/portfolio" className="topmenu__list-item--link">
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="frame__bottom-center">
          <ul className="social__list">
            <li className="social__list-item">
              <a
                href="https://github.com/huntertrammell"
                target="_blank"
                rel="noopener noreferrer"
                className="social__list-item--link"
              >
                <i className="fab fa-github social__list-item--icon"></i>
              </a>
            </li>
            <li className="social__list-item">
              <a
                href="https://www.linkedin.com/in/huntertrammell/"
                target="_blank"
                rel="noopener noreferrer"
                className="social__list-item--link"
              >
                <i className="fab fa-linkedin-in social__list-item--icon"></i>
              </a>
            </li>
            <li className="social__list-item">
              <a
                href="https://codepen.io/huntertrammell"
                target="_blank"
                rel="noopener noreferrer"
                className="social__list-item--link"
              >
                <i className="fab fa-codepen social__list-item--icon"></i>
              </a>
            </li>
            <li className="social__list-item">
              <a
                href="https://twitter.com/trammellwebdev"
                target="_blank"
                rel="noopener noreferrer"
                className="social__list-item--link"
              >
                <i className="fab fa-twitter social__list-item--icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default InternalMenu;
