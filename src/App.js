import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import AdvancedInfo from "./components/AdvancedInfo";
import style from "./style.css";
import information from "./information.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: information,
      editMode: true,
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

  render() {
    return (
      <div id="app" className="container">
        <div id="info" className="row">
          <div className="col-12 col-sm-5 leftside">
            <BasicInfo handleChange={this.handleChange} data={this.state} />
          </div>
          <div className="col-12 col-sm-7">
            <AdvancedInfo handleChange={this.handleChange} data={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
