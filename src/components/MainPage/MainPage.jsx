import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MainPage.css";
import { Spring } from "react-spring/renderprops";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Topics from "../Topics/Topics";

class MainPage extends Component {
  render() {
    return (
      <div className="MainApp" style={{ paddingTop: "10px" }} id="home">
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
                  {/*<a
                    href="../calendar"
                    className="animatetxt"
                    style={{ padding: "40px" }}
                  >
                    Calendar
                  </a>*/}
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
            <h3>EXPLORING SCIENCE & TECH</h3>
          </div>
        </div>
        <div className="overview">
          <h1>UOttawa's destination for technology</h1>
        </div>
        {/* 
        <div className="slider">
          <figure>
            <img src={BulbBG} width="100%" />
            <img src={BulbBG2} width="100%" />
            <img src={BulbBGGrey} width="100%" />
            <img src={BulbBG} width="100%" />
          </figure>
        </div>*/}
      </div>
    );
  }
}

export default MainPage;
