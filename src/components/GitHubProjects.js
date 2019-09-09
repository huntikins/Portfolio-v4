import React from "react";
import axios from "axios";

class GitHub extends React.Component {
  state = {
    repo: []
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "https://api.github.com/user/repos?sort=created&visibility=public",
      auth: {
        username: process.env.REACT_APP_GITHUB_USER,
        password: process.env.REACT_APP_GITHUB_PASS
      }
    }).then(res => {
      console.log(res.data);
      //push all repo's with data needed to state, show in a tile list with info from Github
      /*
      //name: "",
      //description: "",
      //starcount: 0,
      //clonelink: "",
      //created date: MOMENT JS
      //lastUpdated date: MOMENT JS
      //url: ""
      */
    });
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default GitHub;
