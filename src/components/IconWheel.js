import React from "react";

class IconWheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: {
        name: "Hunter Trammell",
        level: 100,
        certification: {
          item1: "Click an icon to see skill level"
        }
      },
      showImage: 1
    };
  }
  handleClick = tech => {
    //match value passed into click event with index from state to display information
    //value will be presented in last li in ul
    switch (tech) {
      case "react":
        this.setState({
          skill: {
            name: "React",
            level: 60,
            certification: {
              item1: "Intermediate"
            }
          },
          showImage: 0
        });
        break;
      case "html5":
        this.setState({
          skill: {
            name: "HTML",
            level: 95,
            certification: {
              item1: "Expert"
            }
          },
          showImage: 0
        });
        break;
      case "git":
        this.setState({
          skill: {
            name: "GIT",
            level: 70,
            certification: {
              item1: "Advanced"
            }
          },
          showImage: 0
        });
        break;
      case "aws":
        this.setState({
          skill: {
            name: "AWS",
            level: 30,
            certification: {
              item1: "Beginner"
            }
          },
          showImage: 0
        });
        break;
      case "node":
        this.setState({
          skill: {
            name: "Node",
            level: 70,
            certification: {
              item1: "Advanced"
            }
          },
          showImage: 0
        });
        break;
      case "css3":
        this.setState({
          skill: {
            name: "CSS",
            level: 90,
            certification: {
              item1: "Expert"
            }
          },
          showImage: 0
        });
        break;
      case "mongodb":
        this.setState({
          skill: {
            name: "MongoDB",
            level: 50,
            certification: {
              item1: "Intermediate"
            }
          },
          showImage: 0
        });
        break;
      case "sql":
        this.setState({
          skill: {
            name: "SQL",
            level: 65,
            certification: {
              item1: "Intermediate"
            }
          },
          showImage: 0
        });
        break;
      case "js":
        this.setState({
          skill: {
            name: "Javascript",
            level: 75,
            certification: {
              item1: "Advanced"
            }
          },
          showImage: 0
        });
        break;
      case "wpress":
        this.setState({
          skill: {
            name: "Wordpress",
            level: 55,
            certification: {
              item1: "Intermediate"
            }
          },
          showImage: 0
        });
        break;
      case "php":
        this.setState({
          skill: {
            name: "PHP",
            level: 40,
            certification: {
              item1: "intermediate"
            }
          },
          showImage: 0
        });
        break;
      case "vuejs":
        this.setState({
          skill: {
            name: "Vue",
            level: 75,
            certification: {
              item1: "Advanced"
            }
          },
          showImage: 0
        });
        break;
      case "sass":
        this.setState({
          skill: {
            name: "Sass",
            level: 80,
            certification: {
              item1: "Advanced"
            }
          },
          showImage: 0
        });
        break;
      case "adobe":
        this.setState({
          skill: {
            name: "Adobe CC",
            level: 40,
            certification: {
              item1: "Photoshop/Illustrator"
            }
          },
          showImage: 0
        });
        break;
      default:
    }
  };
  componentDidUpdate() {
    clearTimeout(this.reset);
  }
  renderDefault = () => {
    this.reset = setTimeout(() => {
      this.setState({
        skill: {
          name: "Hunter Trammell",
          level: 100,
          certification: {
            item1: "Click an icon to see skill level"
          }
        },
        showImage: 1
      });
    }, 1000);
  };
  render() {
    return (
      <ul className="skill__list">
        <li
          className="skill__list-item skill__list-item--react"
          onClick={() => this.handleClick("react")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-react"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--html5"
          onClick={() => this.handleClick("html5")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-html5"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--git"
          onClick={() => this.handleClick("git")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-git"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--aws"
          onClick={() => this.handleClick("aws")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-aws"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--node"
          onClick={() => this.handleClick("node")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-node"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--css3"
          onClick={() => this.handleClick("css3")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-css3-alt"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--mongodb"
          onClick={() => this.handleClick("mongodb")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fas fa-server"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--sql"
          onClick={() => this.handleClick("sql")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fas fa-database"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--js"
          onClick={() => this.handleClick("js")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-js"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--wpress"
          onClick={() => this.handleClick("wpress")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-wordpress-simple"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--php"
          onClick={() => this.handleClick("php")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-php"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--vuejs"
          onClick={() => this.handleClick("vuejs")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-vuejs"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--sass"
          onClick={() => this.handleClick("sass")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-sass"></i>
        </li>
        <li
          className="skill__list-item skill__list-item--adobe"
          onClick={() => this.handleClick("adobe")}
          tabIndex="0"
          onBlur={() => this.renderDefault()}
        >
          <i className="skill__list-item--icon fab fa-adobe"></i>
        </li>
        <li
          className="skill__list-item--image"
          tabIndex="0"
          style={{
            opacity: this.state.showImage,
            transition: "opacity .2s ease-out"
          }}
        >
          <img
            className="img-responsive skill__list-image"
            src="./images/hunterPic.png"
            alt="Hunter Trammell"
          />
        </li>
        <li className="skill__list-info">
          <h2 className="skill__list-header">{this.state.skill.name}</h2>
          <div className="skill__list-proficiency">
            <span
              className="skill__list-proficiency--level"
              style={{ width: this.state.skill.level + "%" }}
            ></span>
          </div>
          <ul className="skill__list-certification">
            <li className="skill__list-certification--item">
              {this.state.skill.certification.item1}
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default IconWheel;
