import React from "react";
import Navigation from "../navigation/InternalMenu";
import Content from "../ContentWrapper";
import IconWheel from "../IconWheel";
import Bio from "../Bio";
//import OutlandWrapper from "../OutlandWrapper"; - will import this later add-on item;

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
        </Content>
      </div>
    );
  }
}

export default About;
