import React, { Component } from "react";

class Name extends Component {
  render() {
    let { name } = this.props.data.info;
    let editMode = this.props.data.editMode;
    let element;

    if (editMode) {
      element = (
        <form className="name-form col-12">
          <label htmlFor="name"></label>
          <input
            onChange={this.props.handleChange}
            className="col-12"
            type="text"
            name="name"
            value={name}
          ></input>
        </form>
      );
    } else {
      element = <h1 className="name col-12">{name}</h1>;
    }

    return (
      <div className="name-container row">
        {element}
        {/* <h1 className="name col-12">{name}</h1>

        <form className="name-form col-12">
          <label htmlFor="name"></label>
          <input
            onChange={this.props.handleChange}
            className="col-12"
            type="text"
            name="name"
            value={name}
          ></input>
        </form> */}
      </div>
    );
  }
}

export default Name;
