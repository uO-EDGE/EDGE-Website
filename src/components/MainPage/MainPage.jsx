import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div className="App" style={{ paddingTop: "90px" }}>
        <div className="mainHeader" id="mainHeader" onmouseover="fadeInTxt()">
          <div style={{ padding: "10px" }}>
            <a
              href="../About/about.php"
              className="animatetxt"
              style={{ padding: "40px" }}
            >
              About
            </a>
            <a
              href="../Topics/topics.php"
              className="animatetxt"
              style={{ padding: "40px" }}
            >
              Topics
            </a>
            <a
              href="../Calendar/calendar.php"
              className="animatetxt"
              style={{ padding: "40px" }}
            >
              Calendar
            </a>
            <a
              href="../Contact/contact.php"
              className="animatetxt"
              style={{ padding: "40px" }}
            >
              Contact Us
            </a>
          </div>

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
