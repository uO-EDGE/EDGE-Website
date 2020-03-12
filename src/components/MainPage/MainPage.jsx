import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div className="App" style={{ paddingTop: "90px" }}>
        <div className="mainHeader" id="mainHeader" onmouseover="fadeInTxt()">
          <div>
            <a href="../About/about.php" className="animatetxt">
              About
            </a>
            <a href="../Topics/topics.php" className="animatetxt">
              Topics
            </a>
            <a href="../Calendar/calendar.php" className="animatetxt">
              Calendar
            </a>
            <a href="../Contact/contact.php" className="animatetxt">
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
