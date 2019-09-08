import React from "react";

class IconWheel extends React.Component {
  state = {
    skill: {
      name: "Click an icon to view proficiency",
      level: 0,
      certification: {
        item1: "KU Coding Bootcamp",
        item2: "Free Code Camp"
      }
    }
  };
  handleClick = tech => {
    console.log(tech + " has been clicked");
    //match value passed into click event with index from state to display information
    //value will be presented in last li in ul
  };
  render() {
    return (
      <ul className="skill__list">
        <li
          className="skill__list-item skill__list-item--react"
          onClick={() => this.handleClick("react")}
          tabIndex="0"
        >
          <i className="skill__list-item--icon fab fa-react"></i>
        </li>
        <li className="skill__list-item skill__list-item--html5" tabIndex="0">
          <i className="skill__list-item--icon fab fa-html5"></i>
        </li>
        <li className="skill__list-item skill__list-item--git" tabIndex="0">
          <i className="skill__list-item--icon fab fa-git"></i>
        </li>
        <li className="skill__list-item skill__list-item--aws" tabIndex="0">
          <i className="skill__list-item--icon fab fa-aws"></i>
        </li>
        <li className="skill__list-item skill__list-item--node" tabIndex="0">
          <i className="skill__list-item--icon fab fa-node"></i>
        </li>
        <li className="skill__list-item skill__list-item--css3" tabIndex="0">
          <i className="skill__list-item--icon fab fa-css3-alt"></i>
        </li>
        <li className="skill__list-item skill__list-item--mongodb" tabIndex="0">
          <i className="skill__list-item--icon fas fa-server"></i>
        </li>
        <li className="skill__list-item skill__list-item--sql" tabIndex="0">
          <i className="skill__list-item--icon fas fa-database"></i>
        </li>
        <li className="skill__list-item skill__list-item--js" tabIndex="0">
          <i className="skill__list-item--icon fab fa-js"></i>
        </li>
        <li className="skill__list-item skill__list-item--wpress" tabIndex="0">
          <i className="skill__list-item--icon fab fa-wordpress-simple"></i>
        </li>
        <li className="skill__list-item skill__list-item--php" tabIndex="0">
          <i className="skill__list-item--icon fab fa-php"></i>
        </li>
        <li className="skill__list-item skill__list-item--vuejs" tabIndex="0">
          <i className="skill__list-item--icon fab fa-vuejs"></i>
        </li>
        <li className="skill__list-item skill__list-item--sass" tabIndex="0">
          <i className="skill__list-item--icon fab fa-sass"></i>
        </li>
        <li className="skill__list-item skill__list-item--adobe" tabIndex="0">
          <i className="skill__list-item--icon fab fa-adobe"></i>
        </li>
        <li className="skill__list-info">
          <h2 className="skill__list-header">{this.state.skill.name}</h2>
          <div className="skill__list-proficiency">
            <span className="skill__list-proficiency--level"></span>
          </div>
          <ul className="skill__list-certification">
            <li className="skill__list-certification--item">
              <i class="fas fa-graduation-cap"></i>{" "}
              {this.state.skill.certification.item1}
            </li>
            <li className="skill__list-certification--item">
              <i class="fab fa-free-code-camp"></i>{" "}
              {this.state.skill.certification.item2}
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default IconWheel;
