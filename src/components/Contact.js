import React, { Component } from "react";

class Contact extends Component {
  render() {
    let { phone, mail, adress } = this.props.info;
    return (
      <div className="contact-container row">
        <h1 className="contact col-12 mb-1 mb-sm-3">Contact</h1>

        <div className="basic-contacts mb-1 my-sm-2">
          <i className="fas fa-mobile-alt"></i>
          <span className="text-basic-info">{phone}</span>
        </div>

        <div className="basic-contacts mb-1 my-sm-2">
          <i className="far fa-envelope"></i>
          <span className="text-basic-info">{mail}</span>
        </div>
        <div className="basic-contacts mb-1 my-sm-2">
          <i className="fas fa-map-marker-alt"></i>
          <span className="text-basic-info">{adress}</span>
        </div>
      </div>
    );
  }
}

export default Contact;
