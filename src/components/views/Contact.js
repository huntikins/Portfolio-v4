import React from "react";
import Navigation from "../navigation/InternalMenu";
import Content from "../ContentWrapper";
import ContactForm from "../ContactForm";
import ContactOptions from "../ContactOptions";

class Contact extends React.Component {
  render() {
    return (
      <div className="page__contact">
        <Navigation />
        <Content>
          <ContactForm />
          <ContactOptions />
        </Content>
      </div>
    );
  }
}

export default Contact;
