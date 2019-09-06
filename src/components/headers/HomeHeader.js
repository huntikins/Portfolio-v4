import React from "react";

class HomeHeader extends React.Component {
  render() {
    return (
      <div className="home">
        <h1 className="home__header home__header-main">Hunter Trammell</h1>
        <p className="home__header home__header-sub">
          Hello and welcome to my website. Please feel free to leave your coat
          at the door and help yourself to any snacks you may find appetizing.
        </p>
      </div>
    );
  }
}

export default HomeHeader;
