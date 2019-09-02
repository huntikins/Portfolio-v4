import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="/index.html">Home</a>
        </li>
        <li>
          <a href="/contact.html">Contact</a>
        </li>
        <li>
          <a href="/about.html">About</a>
        </li>
        <li>
          <a href="/portfolio.html">Portfolio</a>
        </li>
        <li>
          <a href="/blog.html">Blog</a>
        </li>
      </ul>
    );
  }
}
