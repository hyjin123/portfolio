import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-main-container">
        <div className="about-container" id="about">
          <h2 className="about-header">About me</h2>
          <p>
            - Graduated from University of Waterloo in Chemical Engineering in
            2017.
          </p>

          <p>
            - Worked 2 years as an engineer and 4 years as a customer service
            specialist.
          </p>
          <p>
            - However I realized I wanted to become a programming because of my
            passion for problem solving and building things.
          </p>
        </div>
      </div>
      <svg
        className="about-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,96L288,288L576,96L864,128L1152,192L1440,64L1440,0L1152,0L864,0L576,0L288,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default About;
