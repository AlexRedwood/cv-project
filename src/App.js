import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";
import AdvancedInfo from "./components/AdvancedInfo";
import style from "./style.css";

class App extends Component {
  render() {
    return (
      <div id="app" className="container">
        <div id="info" className="row">
          <div className="col-12 col-sm-5 leftside">
            <BasicInfo />
          </div>
          <div className="col-12 col-sm-7">
            <AdvancedInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
