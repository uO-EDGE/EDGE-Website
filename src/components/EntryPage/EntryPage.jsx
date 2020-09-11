import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./EntryPage.css";
import Typing from "react-typing-animation";

class EntryPage extends Component {
  render() {
    return (
      <div
        className="EntryStyles"
        style={{
          color: "white",
        }}
      >
        <h1 className="entryh1">E D G E</h1>
        <a href="../home" style={{ backgroundColor: "white" }}>
          <Typing speed={110} loop={true}>
            <span>
              <h3 className="entryh3">exploring science & tech.</h3>
            </span>
            <Typing.Backspace count={30} />
          </Typing>
        </a>
      </div>
    );
  }
}

export default EntryPage;
