import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BulbBG from "./BulbBG.png";
import BulbBG2 from "./BulbBG2.png";
import BulbBGGrey from "./BulbBGGrey.png";
import "./Topics.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Topics extends Component {
  render() {
    return (
      <div className= "topicBody"
        style={{
          width: "100%",
             
        }}
        classname="diagonalBox"
      >
        <div
          style={{
            color: "white",
            paddingTop: "80px",
            paddingBottom: "100px",

          
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
              marginBottom: "500px",
              backgroundColor: "#040413",
            }}
          >
            Topics
          </h1>{
            <Carousel>
                <div>
                    <img src={BulbBG} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={BulbBG2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={BulbBGGrey} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
         }</div>
      </div>
    );
  }
}

export default Topics;
