import React, { Component } from "react";

class Contact extends Component {
  render() {
    let { phone, mail, adress } = this.props.data.info;
    let editMode = this.props.data.editMode;
    let element;

    if (editMode) {
      element = (
        <div className="contact-container row">
          <h1 className="contact col-12 mb-1 mb-sm-3">Contact</h1>

          <form onSubmit={this.props.handleSubmit} className="name-form col-12">
            <div className="row">
              <div className="basic-contacts mt-3 mb-2 my-sm-2 col-12 row">
                <label htmlFor="phone">
                  <i className="fas fa-mobile-alt"></i>
                </label>
                <input
                  spellCheck="false"
                  onChange={this.props.handleChange}
                  className="col-10"
                  type="text"
                  name="phone"
                  value={phone}
                  autoComplete="off"
                ></input>
              </div>

              <div className="basic-contacts mb-2 my-sm-2 col-12 row">
                <label htmlFor="mail">
                  <i className="far fa-envelope"></i>
                </label>
                <input
                  spellCheck="false"
                  onChange={this.props.handleChange}
                  className="col-10"
                  type="text"
                  name="mail"
                  value={mail}
                  autoComplete="off"
                ></input>
              </div>

              <div className="basic-contacts mb-2 my-sm-2 col-12 row">
                <label htmlFor="adress">
                  <i className="fas fa-map-marker-alt"></i>
                </label>
                <input
                  spellCheck="false"
                  onChange={this.props.handleChange}
                  className="col-10"
                  type="text"
                  name="adress"
                  value={adress}
                  autoComplete="off"
                ></input>
              </div>
            </div>
            <input type="submit" className="hidden"></input>
          </form>
        </div>
      );
    } else {
      element = (
        <div className="contact-container row">
          <h1 className="contact col-12 mb-1 mb-sm-3">Contact</h1>

          <div className="basic-contacts mt-3 mb-2 my-sm-2">
            <i className="fas fa-mobile-alt"></i>
            <span className="text-basic-info">{phone}</span>
          </div>

          <div className="basic-contacts mb-2 my-sm-2">
            <i className="far fa-envelope"></i>
            <span className="text-basic-info">{mail}</span>
          </div>

          <div className="basic-contacts mb-2 my-sm-2">
            <i className="fas fa-map-marker-alt"></i>
            <span className="text-basic-info">{adress}</span>
          </div>
        </div>
      );
    }

    return <div className="row">{element}</div>;
  }
}

export default Contact;
