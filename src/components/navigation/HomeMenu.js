import React, { Component } from "react";

class HomeMenu extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="frame frame__top-left"></div>
        <div className="frame frame__bottom-left"></div>
        <div className="frame frame__bottom-right"></div>
        <ul className="menu__list frame__top-right">
          <li className="menu__list-item">
            <a className="menu__list-item--link" href="/about.html">
              About
            </a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-item--link" href="/portfolio.html">
              Portfolio
            </a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-item--link" href="/blog.html">
              Blog
            </a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-item--link" href="/contact.html">
              Contact
            </a>
          </li>
        </ul>
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
                href="https://www.instagram.com/_otaku_princess/"
                target="_blank"
                rel="noopener noreferrer"
                className="social__list-item--link"
              >
                <i className="fab fa-instagram social__list-item--icon"></i>
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

export default HomeMenu;
