import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Contact extends Component {
  render() {
    return (
      <div
        style={{
          color: "white",
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundColor: "#14213d",
          textTransform: "uppercase",
          letterSpacing: "0.5em",
          width: "100%",
          transform: "skewY(-5deg)",
        }}
        id="contact"
      >
        <div style={{ position: "relative", transform: "skewY(5deg)" }}>
          <h1 style={{ paddingBottom: "50px", textAlign: "center" }}>
            Contact Us
          </h1>

          <p style={{ textAlign: "center" }}>
            Send us an email at uottawa.edge@gmail.com!
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
