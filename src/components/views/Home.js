import React from "react";
import Navigation from "../navigation/HomeMenu";
import HomeHeader from "../HomeHeader";

class Home extends React.Component {
  render() {
    return (
      <div className="page__home">
        <Navigation />
        <HomeHeader />
      </div>
    );
  }
}

export default Home;
