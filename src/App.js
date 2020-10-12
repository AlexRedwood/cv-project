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
    };
  }

  render() {
    return (
      <div id="app" className="container">
        <div id="info" className="row">
          <div className="col-12 col-sm-5 leftside">
            <BasicInfo info={this.state.info} />
          </div>
          <div className="col-12 col-sm-7">
            <AdvancedInfo info={this.state.info} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
