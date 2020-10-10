import React, { Component } from "react";
import Photo from "./Photo";
import Contact from "./Contact";
import About from "./About";

class BasicInfo extends Component {
  render() {
    return (
      <div className="row BasicInfo">
        <div className="col-12">
          <Photo />
        </div>
        <div className="col-12">
          <Contact />
        </div>
        <div className="col-12">
          <About />
        </div>
      </div>
    );
  }
}

export default BasicInfo;
