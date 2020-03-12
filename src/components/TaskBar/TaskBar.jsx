import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import SocialsBar from "./SocialsBar/SocialsBar";
import "./TaskBar.css";

class TaskBar extends Component {
  state = {};
  render() {
    return (
      <div className="navBar">
        <div
          className="dropDownMenu"
          style={{ width: "30%", diplay: "inline-block" }}
        >
          <button className="dropbtn">
            <div></div>
            <div></div>
            <div></div>
          </button>
          <div className="dropdown-content">
            <a href="/home">H O M E</a>
            <a href="..About/about.html">A B O U T</a>
            <a href="../Topics/topics.html">T O P I C S</a>
            <a href="#">C A L E N D A R</a>
            <a href="../ContactUs/contact">C O N T A C T</a>
          </div>
        </div>
        <SocialsBar style={{ display: "inline-block" }}></SocialsBar>
      </div>
    );
  }
}

export default TaskBar;
