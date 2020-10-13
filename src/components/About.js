import React, { Component } from "react";

class About extends Component {
  render() {
    let { about } = this.props.data.info;
    return (
      <div className="about-container row mt-sm-2">
        <h1 className="about col-12 my-2 mb-sm-4">About</h1>
        <span className="about-text col-12">{about}</span>
      </div>
    );
  }
}

export default About;
