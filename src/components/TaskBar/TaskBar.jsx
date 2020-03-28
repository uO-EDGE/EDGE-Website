import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import SocialsBar from "./SocialsBar/SocialsBar";
import "./TaskBar.css";
import { Link } from "react-router-dom";

class TaskBar extends Component {
  state = {};
  render() {
    return (
      <div
        className="navBar"
        style={{ display: "flex", flexDirection: "row", padding: "10px" }}
      >
        <div
          className="dropDownMenu"
          style={{ width: "79%", diplay: "inline-block" }}
        >
          <button className="dropbtn">
            <div></div>
            <div></div>
            <div></div>
          </button>
          <div className="dropdown-content">
            <Link to="/">
              <a>H O M E</a>
            </Link>
            <Link to="/about">
              <a>A B O U T</a>
            </Link>
            <Link to="/topics">
              <a>T O P I C S</a>
            </Link>
            <Link to="/calendar">
              <a>C A L E N D A R</a>
            </Link>
            <Link to="/contact">
              <a>C O N T A C T</a>
            </Link>
          </div>
        </div>
        <SocialsBar
          style={{
            display: "inline-block",
            flex: "auto",
            align: "right",
            alignSelf: "flex-end"
          }}
        ></SocialsBar>
      </div>
    );
  }
}

export default TaskBar;
