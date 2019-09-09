import React from "react";
import Navigation from "../navigation/InternalMenu";
import Content from "../ContentWrapper";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="page__projects">
        <Navigation />
        <Content></Content>
      </div>
    );
  }
}

export default Portfolio;
