import React from "react";

class ContactOptions extends React.Component {
  render() {
    return (
      <div>
        <ul className="contact__list">
          <li className="contact__list-item">
            <i className="fas fa-mobile contact__list-item--icon"></i>
            <a href="tel:1-913-850-9422" className="contact__list-item--link">
              913-850-9442
            </a>
          </li>
          <li className="contact__list-item">
            <i className="fas fa-envelope-open contact__list-item--icon"></i>
            <a
              className="contact__list-item--link"
              href="mailto:hunterttrammell@gmail.com"
            >
              hunterttrammell@gmail.com
            </a>
          </li>
          <li className="contact__list-item">
            <i className="fas fa-globe-americas contact__list-item--icon"></i>
            <p className="contact__list-item--text">Overland Park, Kansas</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ContactOptions;
