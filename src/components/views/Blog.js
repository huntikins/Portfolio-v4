import React from "react";
import Navigation from "../navigation/InternalMenu";
import Content from "../ContentWrapper";

class Blog extends React.Component {
  render() {
    return (
      <div className="page__blog">
        <Navigation />
        <Content>
          <div className="blog__coming-soon">
            <h1 className="blog__header">Blog Coming Soon</h1>
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.gatsbyjs.org/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png"
                alt="gatsby.js"
                className="blog__gatsby"
              />
            </a>
          </div>
        </Content>
      </div>
    );
  }
}

export default Blog;
