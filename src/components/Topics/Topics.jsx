import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BulbBG from "./BulbBG.png";
import BulbBG2 from "./BulbBG2.png";
import BulbBGGrey from "./BulbBGGrey.png";
import "./Topics.css";

class Topics extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          transform: "skewY(5deg)",
          backgroundColor: "#000000",
        }}
        classname="diagonalBox"
      >
        <div
          style={{
            color: "white",
            paddingTop: "80px",
            paddingBottom: "100px",

            transform: "skewY(-5deg)",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <h1
            id="topics"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.5em",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            Topics
          </h1>
          <div className="slider" style={{ alignSelf: "center" }}>
            <figure>
              <img src={BulbBG} width="100%" />
              <img src={BulbBG2} width="100%" />
              <img src={BulbBGGrey} width="100%" />
              <img src={BulbBG} width="100%" />
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Topics;
