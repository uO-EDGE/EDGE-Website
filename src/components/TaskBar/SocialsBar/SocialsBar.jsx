import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SocialsBar.css";

class SocialsBar extends Component {
  render() {
    return (
      <div className="navBar">
        <div
          className="socialsBar"
          style={{
            width: "40%",
            display: "flex",
          }}
        >
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <a href="#" className="fa fa-facebook"></a>
          <a
            href="https://www.instagram.com/uo.edge/"
            className="fa fa-instagram"
          ></a>
          <a href="#" className="fa fa-linkedin"></a>
          <a href="#" className="fa fa-youtube"></a>
        </div>
      </div>
    );
  }
}

export default SocialsBar;
