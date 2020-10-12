import React, { Component } from "react";

class Education extends Component {
  render() {
    let { degree, university, faculty } = this.props.info;
    return (
      <div className="education-container row mt-sm-5">
        <h1 className="education col-12 mb-2 mb-sm-4">Education</h1>
        <span className="education-text col-12">
          <p>{degree}</p>
          <p>{university}</p>
          <p>{faculty}</p>
        </span>
      </div>
    );
  }
}

export default Education;
