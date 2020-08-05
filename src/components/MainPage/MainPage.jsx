import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MainPage.css";
import { Spring } from "react-spring/renderprops";
import BulbBG from "./BulbBG.png";
import BulbBG2 from "./BulbBG2.png";
import BulbBGGrey from "./BulbBGGrey.png";

class MainPage extends Component {
  render() {
    return (
      <div className="App" style={{ paddingTop: "60px" }}>
        <div className="mainHeader" id="mainHeader" onmouseover="fadeInTxt()">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 250, duration: 2000 }}
          >
            {(props) => (
              <div style={props}>
                <div style={{ padding: "40px" }}>
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
            <h1 style={{ paddingTop: "0px" }}>EDGE</h1>
            <h3>A PLACE FOR SCIENCE & TECH</h3>
          </div>
        </div>
        <div className="overview">
          <h1>UOttawa's destination for technology</h1>
        </div>
        <div className="slider">
          <figure>
            <img src={BulbBG} width="100%" />
            <img src={BulbBG2} width="100%" />
            <img src={BulbBGGrey} width="100%" />
            <img src={BulbBG} width="100%" />
          </figure>
        </div>
      </div>
    );
  }
}

export default MainPage;
