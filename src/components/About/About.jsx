import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div
        className="aboutDiv"
        id="about"
        style={{
          paddingTop: "80px",
          paddingBottom: "30px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2>A B O U T</h2>
        <hr style={{ height: "7px", color: "black" }} />
        <div
          style={{
            textAlign: "center",
            paddingLeft: "5%",
            paddingRight: "5%",
            fontSize: "large",
          }}
        >
          <p>
            EDGE is a place where ideas and advancements in science and
            technology are shared and discussed. It is a place where anyone and
            everyone can reach beyond their field of study to discover
            interesting innovations happening in the worlds of science and tech.
          </p>
          <p>
            All are welcome to take the stage and share their passion for a
            particular topic. Students will play an important role in Speaker
            Night and are encouraged to present a topic that they are passionate
            about either solo or in collaborations with professors or industry
            professionals.
          </p>
        </div>
        <dir className="servicesBox">
          <div className="services">
            <h4>What Do We Do?</h4>

            <div
              className="block"
              style={{ backgroundColor: "white", color: "black" }}
            >
              <h6>Speaker Nights</h6>
            </div>

            <div
              class="block"
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: "small",
              }}
            >
              <h6>Podcasts</h6>
            </div>

            <div
              class="block"
              style={{ backgroundColor: "white", color: "black" }}
            >
              <h6>Blog Posts</h6>
            </div>
          </div>
        </dir>
      </div>
    );
  }
}

export default About;
