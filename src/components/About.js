import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-main-container">
        <div className="about-container" id="about">
          <img
            className="about-img"
            src={require("./flower1.png")}
            alt="sean-bitmoji"
          />
          <img
            className="about-img2"
            src={require("./flower-test-1.png")}
            alt="sean-bitmoji"
          />
          <p>About</p>
          <h2 className="about-header">Who is Sean?</h2>

          <p className="about-header-text">
            Curiosity-driven Full Stack Web Developer with passion for building
            things.
          </p>

          <p className="about-text">
            I have a BASc in Chemical Engineering from University of Waterloo 🇨🇦
            and a Full Stack Web Development Certificate from Lighthouse Labs,
            Inc.
          </p>
          <p className="about-text">
            I also have 2 years of experience working as an engineer and 4 years
            of experience working as a Customer Renewals Specialist. I realized
            I wanted to become a programming because of my passion for problem
            solving and building things.
          </p>
          <p className="about-text">
            After many years of working, I realized I wanted to become a
            programmer because of my passion for problem solving and building
            things. I am the happiest when I am building and coding things that
            I am passionate about.
          </p>
          <button type="submit"> Contact me!</button>
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
