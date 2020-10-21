import React, { Component } from "react";

class Experience extends Component {
  render() {
    let { experience } = this.props.data.info;
    let editMode = this.props.data.editMode;
    let element;

    if (editMode) {
      element = (
        <div>
          <h1 className="experience col-12 my-4 mb-sm-4">Experience</h1>
          <form onSubmit={this.props.handleSubmit} className="name-form col-12">
            <label htmlFor="experience"></label>
            <input
              id="experience"
              spellCheck="false"
              onChange={this.props.handleChange}
              className="col-10"
              type="text"
              name="experience"
              value={experience}
              autoComplete="off"
            ></input>
          </form>
        </div>
      );
    } else {
      element = (
        <div className="experience-container row mt-sm-2">
          <h1 className="experience col-12 my-4 mb-sm-4">Experience</h1>
          <span className="experience-text col-12">{experience}</span>
        </div>
      );
    }

    return <div>{element}</div>;
  }
}

export default Experience;
