import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <nav>
        <div className="frame frame__top-left"></div>
        <div className="frame frame__bottom-left"></div>
        <div className="frame frame__bottom-right"></div>
        <ul className="menu__list frame__top-right">
          <li className="menu__list-item">
            <a className="menu__list-item--link" href="/index.html">
              Home
            </a>
          </li>
          <li className="menu__list-item">
            <a className="menu__list-item--link" href="/contact.html">
              Contact
            </a>
          </li>
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
        </ul>
        <p className="frame__bottom-center">
          Copyright &copy; Hunter Trammell 2019. All Rights Reserved.
        </p>
      </nav>
    );
  }
}

export default Menu;
