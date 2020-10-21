import React, { Component } from "react";
import Photo from "./Photo";
import Contact from "./Contact";
import Name from "./Name";

class BasicInfo extends Component {
  render() {
    return (
      <div className="row BasicInfo">
        <div className="photo-container col-12 my-sm-4">
          <Photo />
        </div>
        <div className="contact-container col-12 my-4 my-sm-5">
          <Name
            handleSubmit={this.props.handleSubmit}
            handleChange={this.props.handleChange}
            data={this.props.data}
          />
        </div>
        <div className="about-container col-12 mt-3 mt-sm-2">
          <Contact
            handleSubmit={this.props.handleSubmit}
            handleChange={this.props.handleChange}
            data={this.props.data}
          />
        </div>
      </div>
    );
  }
}

export default BasicInfo;
