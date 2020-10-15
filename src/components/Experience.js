import React, { Component } from "react";

class Experience extends Component {
  render() {
    let { experience } = this.props.data.info;
    return (
      <div className="experience-container row mt-sm-2">
        <h1 className="experience col-12 my-4 mb-sm-4">Experience</h1>
        <span className="experience-text col-12">{experience}</span>
      </div>
    );
  }
}

export default Experience;
