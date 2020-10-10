import React, { Component } from "react";

class Photo extends Component {
  render() {
    return (
      <div className="container">
        <img
          className="img-fluid mx-auto d-block w-75"
          src={require("../assets/images/yoba.png")}
          alt="Applicant"
        />
      </div>
    );
  }
}

export default Photo;
