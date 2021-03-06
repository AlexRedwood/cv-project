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
    this.setState((prevState) => {
      return {
        editMode: !prevState.editMode,
      };
    });
    window.localStorage.setItem("info", JSON.stringify(this.state.info));
  };

  handleSubmit = (event) => {
    this.setState((prevState) => {
      return {
        editMode: !prevState.editMode,
      };
    });
    window.localStorage.setItem("info", JSON.stringify(this.state.info));
    event.preventDefault();
  };

  render() {
    return (
      <div id="app" className="container">
        <div id="info" className="row align-items-stretch">
          <div className="p-3 pr-5 col-12 col-sm-5 leftside">
            <BasicInfo
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              data={this.state}
            />
          </div>
          <div className="p-3 col-12 col-sm-7">
            <AdvancedInfo
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              data={this.state}
            />
          </div>
          <button
            onClick={this.handleClick}
            type="button"
            className="edit-btn "
          >
            <i className="fas fa-edit"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
