import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <>
      <div className="intro-main-container">
        <div className="intro-container" id="home">
          <h2 className="intro-header">I'm Sean Jin</h2>
          <p className="intro-content">
            I am a full stack developer who is excited to get started in a
            career of web development. Always positive, hard-working, and eager
            to learn new things!
          </p>
          <div className="see-projects">See Projects</div>
        </div>
        <div className="intro-container2">
          <img
            className="intro-img"
            src={require("./sean1.png")}
            alt="sean-bitmoji"
            width="350"
          />
        </div>
      </div>
      <svg
        className="intro-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#eae7dc"
          fill-opacity="1"
          d="M0,0L1440,256L1440,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Intro;
