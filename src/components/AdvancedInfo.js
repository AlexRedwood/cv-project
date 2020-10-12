import React, { Component } from "react";
import About from "./About";
import Education from "./Education.js";
import Experience from "./Experience";

class AdvancedInfo extends Component {
  render() {
    return (
      <div className="AdvancedInfo row">
        <div className="col-12 mt-1 my-sm-5">
          <Education info={this.props.info} />
        </div>
        <div className="col-12 mt-2 my-sm-3">
          <Experience info={this.props.info} />
        </div>
        <div className="col-12 mt-2 my-sm-3">
          <About info={this.props.info} />
        </div>
      </div>
    );
  }
}

export default AdvancedInfo;