import React from "react";

class Content extends React.Component {
  render() {
    return <div className="content__wrapper">{this.props.children}</div>;
  }
}

export default Content;
