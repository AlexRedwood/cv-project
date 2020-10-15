import React, { Component } from "react";

class Name extends Component {
  render() {
    let { name } = this.props.data.info;
    let editMode = this.props.data.editMode;
    let element;

    if (editMode) {
      element = (
        <div id="name" className="name col-12">
          <form onSubmit={this.props.handleSubmit} className="name-form col-12">
            <label htmlFor="name"></label>
            <input
              spellCheck="false"
              onChange={this.props.handleChange}
              className="col-12"
              type="text"
              name="name"
              value={name}
              autoComplete="off"
            ></input>
          </form>
        </div>
      );
    } else {
      element = (
        <div id="name" className="name col-12">
          {name}
        </div>
      );
    }

    return <div className="name-container row">{element}</div>;
  }
}

export default Name;
