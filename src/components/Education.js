import React, { Component } from "react";

class Education extends Component {
  render() {
    let { degree, university, faculty } = this.props.data.info;
    let editMode = this.props.data.editMode;
    let element;

    if (editMode) {
      element = (
        <div className="education-container row mt-sm-5">
          <h1 className="education col-12 mb-3 mb-sm-4">Education</h1>
          <form onSubmit={this.props.handleSubmit} className="name-form col-12">
            <label htmlFor="degree"></label>
            <input
              id="degree"
              spellCheck="false"
              onChange={this.props.handleChange}
              className="col-10"
              type="text"
              name="degree"
              value={degree}
              autoComplete="off"
            ></input>

            <label htmlFor="university"></label>
            <input
              id="university"
              spellCheck="false"
              onChange={this.props.handleChange}
              className="col-10"
              type="text"
              name="university"
              value={university}
              autoComplete="off"
            ></input>

            <label htmlFor="faculty"></label>
            <input
              id="faculty"
              spellCheck="false"
              onChange={this.props.handleChange}
              className="col-10"
              type="text"
              name="faculty"
              value={faculty}
              autoComplete="off"
            ></input>
            <input type="submit" className="hidden"></input>
          </form>
        </div>
      );
    } else {
      element = (
        <div className="education-container row mt-sm-5">
          <h1 className="education col-12 mb-3 mb-sm-4">Education</h1>
          <span className="education-text col-12">
            <p>{degree}</p>
            <p>{university}</p>
            <p>{faculty}</p>
          </span>
        </div>
      );
    }

    return <div>{element}</div>;
  }
}

export default Education;
