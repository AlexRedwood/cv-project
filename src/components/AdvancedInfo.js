import React, { Component } from "react";
import Name from "./Name";
import Education from "./Education.js";
import Experience from "./Experience";

class AdvancedInfo extends Component {
  render() {
    return (
      <div className="AdvancedInfo">
        <Name />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default AdvancedInfo;
