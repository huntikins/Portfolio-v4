import React from "react";
import Navigation from "../navigation/InternalMenu";
import Content from "../ContentWrapper";

class About extends React.Component {
  render() {
    return (
      <div className="page__about">
        <Navigation />
        <Content>
          <h1 className="about__header-main">About</h1>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <ul className="social__list">
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-react"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-html5"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-git"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-aws"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-node"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-css3-alt"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fas fa-server"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fas fa-database"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-js"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-wordpress-simple"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-php"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-vuejs"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-sass"></i>
                </li>
                <li className="social__list-item">
                  <i className="social__list-item--icon fab fa-adobe"></i>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12">
              <p className="about__bio">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.At vero eos et
                accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum
                soluta nobis est eligendi optio cumque nihil impedit quo minus
                id quod maxime placeat facere possimus, omnis voluptas assumenda
                est, omnis dolor repellendus. Temporibus autem quibusdam et aut
                officiis debitis aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae sint et molestiae non recusandae. Itaque
                earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                voluptatibus maiores alias consequatur aut perferendis doloribus
                asperiores repellat.At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum
                fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.At
                vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat
              </p>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default About;
