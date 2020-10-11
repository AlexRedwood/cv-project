import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container row">
        <h1 className="contact col-12 mb-1 mb-sm-3">Contact</h1>

        <div className="basic-contacts mb-1 my-sm-2">
          <i className="fas fa-mobile-alt"></i>
          <span className="text-basic-info">+420 724 847 202</span>
        </div>

        <div className="basic-contacts mb-1 my-sm-2">
          <i className="far fa-envelope"></i>
          <span className="text-basic-info">allo.yoba@etoti.cz</span>
        </div>
        <div className="basic-contacts mb-1 my-sm-2">
          <i className="fas fa-map-marker-alt"></i>
          <span className="text-basic-info">
            Pushkin st., Kolotushkin, Czech Republic
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;
