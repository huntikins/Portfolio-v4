import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="contact__wrapper">
        <div className="contact__form">
          <form
            action="https://formspree.io/hunterttrammell@gmail.com"
            method="POST"
            className="form"
          >
            <div className="u-margin-bottom-medium">
              <h2 className="contact__heading">Contact Me</h2>
            </div>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Full Name"
                name="name"
                required
              />
              <label for="name" className="form__label">
                Full Name
              </label>
            </div>
            <div className="form__group">
              <input
                type="email"
                className="form__input"
                placeholder="Email Address"
                name="email"
                required
              />
              <label for="email" className="form__label">
                Email Address
              </label>
            </div>
            <div className="form__group">
              <textarea
                type="text"
                className="form__input"
                placeholder="Message"
                name="body"
                required
              />
            </div>
            <div className="form__group">
              <button className="form__button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
