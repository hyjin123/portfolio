import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro-main-container">
      <div className="intro-container" id="home">
        <h2 className="intro-header">I'm Sean Jin</h2>
        <p className="intro-content">
          I am a full stack developer who is excited to get started in a career
          of web development. Always positive, hard-working, and eager to learn
          new things!
        </p>
        <div className="see-projects">See Projects</div>
      </div>
      <div className="intro-container2">
        <img
          className="intro-img"
          src={require("./sean1.png")}
          alt="sean-bitmoji"
          width="400"
        />
      </div>
    </div>
  );
}

export default Intro;
