import React, { Component } from "react";

class About extends Component {
  render() {
    let { about } = this.props.data.info;
    let editMode = this.props.data.editMode;
    let element;

    if (editMode) {
      element = (
        <div>
          <h1 className="about col-12 my-4 mb-sm-4">About</h1>

          <form onSubmit={this.props.handleSubmit} className="name-form col-12">
            <label htmlFor="about"></label>
            <input
              id="about"
              spellCheck="false"
              onChange={this.props.handleChange}
              className="col-10"
              type="text"
              name="about"
              value={about}
              autoComplete="off"
            ></input>
          </form>
        </div>
      );
    } else {
      element = (
        <div className="about-container row mt-sm-2">
          <h1 className="about col-12 my-4 mb-sm-4">About</h1>
          <span className="about-text col-12">{about}</span>
        </div>
      );
    }

    return <div>{element}</div>;
  }
}

export default About;
