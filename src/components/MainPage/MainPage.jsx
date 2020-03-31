import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MainPage.css";
import { Spring } from "react-spring/renderprops";

class MainPage extends Component {
  render() {
    return (
      <div className="App" style={{ paddingTop: "90px" }}>
        <div className="mainHeader" id="mainHeader" onmouseover="fadeInTxt()">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 250, duration: 2000 }}
          >
            {props => (
              <div style={props}>
                <div style={{ padding: "10px" }}>
                  <a
                    href="../about"
                    className="animatetxt"
                    style={{ padding: "40px" }}
                  >
                    About
                  </a>
                  <a
                    href="../topics"
                    className="animatetxt"
                    style={{ padding: "40px" }}
                  >
                    Topics
                  </a>
                  <a
                    href="../calendar"
                    className="animatetxt"
                    style={{ padding: "40px" }}
                  >
                    Calendar
                  </a>
                  <a
                    href="../contact"
                    className="animatetxt"
                    style={{ padding: "40px" }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            )}
          </Spring>
          <div className="titletxt">
            <h1 style={{ paddingTop: "30px", paddingLeft: "20px" }}>EDGE</h1>
            <h3>A PLACE FOR SCIENCE & TECH</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
