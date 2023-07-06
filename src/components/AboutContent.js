import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from "react";
import img4 from "../assets/2.png";
import img5 from "../assets/3.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a FULL-STACK WEB DEVELOPER</p>
        <Link to="/contact"></Link>
        <button className="btn">Contact</button>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img4} className="img" alt="true" />
          </div>

          <div className="img-stack bottom">
            <img src={img5} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
