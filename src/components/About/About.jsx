import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div
        style={{
          paddingTop: "160px",
          width: "97%",
          paddingLeft: "auto",
          paddingRight: "auto",
        }}
      >
        <h2>A B O U T</h2>
        <hr style={{ height: "7px", color: "black", paddingLeft: "30px" }} />
        <div className="body" style={{ width: "87%" }}>
          <div class="intro" style={{ flex: "1", textAlign: "center" }}>
            <p>
              EDGE is a place where ideas and advancements in science and
              technology are shared and discussed. It is a place where anyone
              and everyone can reach beyond their field of study to discover
              interesting innovations happening in the worlds of science and
              tech. Edge will host monthly Speaker Nights discussing the topic
              of the month. It is also an opportunity for students to develop
              new connections with like-minded students and professionals.
            </p>
            <p>
              All are welcome to take the stage and share their passion for a
              particular topic. Students will play an important role in Speaker
              Night and are encouraged to present a topic that they are
              passionate about either solo or in collaborations with professors
              or industry professionals.
            </p>
          </div>
        </div>
        <dir class="servicesBox">
          <div class="services">
            <h4>What Do We Do?</h4>

            <div class="block">
              <h5>Speaker Nights</h5>
            </div>

            <div class="block">
              <h5>Podcasts</h5>
            </div>

            <div class="block">
              <h5>Blog Posts</h5>
            </div>
          </div>
        </dir>
      </div>
    );
  }
}

export default About;
