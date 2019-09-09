import React from "react";

class HomeHeader extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="col-md-2 col-sm-12 text-left">
            <img
              className="img-responsive home__image"
              src="./images/logo.png"
              alt="..."
            />
          </div>
        </div>
        <div className="row home__wrapper">
          <div className="offset-md-2 col-md-8 col-sm-12">
            <h1 className="home__header home__header-main">HUNTER TRAMMELL</h1>
          </div>
          <div className="offset-md-2 col-md-8 col-sm-12">
            <p className="home__header home__header-sub">
              FULL-STACK WEB DEVELOPER
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
