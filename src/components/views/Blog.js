import React from "react";
import Navigation from "../navigation/InternalMenu";
import Content from "../ContentWrapper";

class Blog extends React.Component {
  render() {
    return (
      <div className="page__blog">
        <Navigation />
        <Content></Content>
      </div>
    );
  }
}

export default Blog;
