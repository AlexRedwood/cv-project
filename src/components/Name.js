import React, { Component } from "react";

class Name extends Component {
  render() {
    let { name } = this.props.info;
    return (
      <div className="name-container">
        <h1 className="name">{name}</h1>
      </div>
    );
  }
}

export default Name;
