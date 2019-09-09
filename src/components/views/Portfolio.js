import React from "react";
import Navigation from "../navigation/InternalMenu";
import Content from "../ContentWrapper";
import GitHub from "../GitHubProjects";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="page__projects">
        <Navigation />
        <Content>
          <GitHub />
        </Content>
      </div>
    );
  }
}

export default Portfolio;
