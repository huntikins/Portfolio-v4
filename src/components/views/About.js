import React from "react";
import Navigation from "../navigation/InternalMenu";
import Content from "../ContentWrapper";
import IconWheel from "../IconWheel";
import Bio from "../Bio";

class About extends React.Component {
  render() {
    return (
      <div className="page__about">
        <Navigation />
        <Content>
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <IconWheel />
            </div>
            <div className="col-md-7 col-sm-12 about">
              <h1 className="about__header-main">About Me</h1>
              <Bio />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h1 className="about__outland-intro">
                <i class="fas fa-angle-double-down px-4"></i>
                Welcome to the world of Outland
                <i class="fas fa-angle-double-down px-4"></i>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="about__outland">
                <img
                  className="img-responsive about__outland-logo"
                  src="./opub.png"
                  alt="Outland Publishing"
                />
                <img
                  className="img-responsive about__outland-logo"
                  src="./ows.png"
                  alt="Outland Web Solutions"
                />
              </div>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default About;
