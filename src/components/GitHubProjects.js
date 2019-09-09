import React from "react";
import axios from "axios";

class GitHub extends React.Component {
  state = {
    repo: []
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "https://api.github.com/user/repos?sort=updated&visibility=public",
      auth: {
        username: process.env.REACT_APP_GITHUB_USER,
        password: process.env.REACT_APP_GITHUB_PASS
      }
    }).then(res => {
      console.log(res.data);
      this.setState({ repo: res.data });
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
    return (
      <div className="github__wrapper">
        <table className="github__table">
          <tbody className="github__table-body">
            {this.state.repo.map((item, index) => {
              return (
                <tr className="github__table-body--row" key={index}>
                  <td className="github__table-body--content github__table-body--name">
                    {item.name}
                  </td>
                  <td className="github__table-body--content github__table-body--description">
                    {item.description}
                  </td>
                  <td className="github__table-body--content">
                    <a
                      href={item.html_url}
                      className="github__table-body--link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-code-branch"></i>
                    </a>
                  </td>
                  <td className="github__table-body--content">
                    {item.updated_at.slice(0, 10)}
                  </td>
                  <td className="github__table-body--content">
                    {item.stargazers_count} <i className="fas fa-star"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GitHub;
