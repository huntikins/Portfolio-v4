import React from "react";

class OutlandWrapper extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default OutlandWrapper;
