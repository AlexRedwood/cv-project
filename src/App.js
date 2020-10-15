import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import AdvancedInfo from "./components/AdvancedInfo";
import style from "./style.css";
import information from "./information.js";
import editMode from "./editMode.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: information,
      editMode: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      return {
        info: {
          ...prevState.info,
          [name]: value,
        },
      };
    });
  };

  handleClick = (event) => {
    const id = event.currentTarget.id;
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div id="app" className="container">
        <div id="info" className="row align-items-stretch">
          <div className="col-12 col-sm-5 leftside">
            <BasicInfo
              handleSubmit={this.handleSubmit}
              handleClick={this.handleClick}
              handleChange={this.handleChange}
              data={this.state}
            />
          </div>
          <div className="col-12 col-sm-7">
            <AdvancedInfo
              handleSubmit={this.handleSubmit}
              handleClick={this.handleClick}
              handleChange={this.handleChange}
              data={this.state}
            />
          </div>
          <button type="button" className="edit-btn ">
            <i className="fas fa-edit"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
