import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <>
      <div className="skills-container" id="skills">
        <img
          className="skills-img2"
          src={require("./pics/flower7.png")}
          alt="sean-bitmoji"
          max-width="30%"
        />
        <p className="skills-main-header">Skills</p>
        <h2 className="about-header">Things I can do!</h2>
        <p className="about-text">
          Technologies, skills, and tools I use to make amazing projects
        </p>
        <div className="icons">
          <div className="icons-child">
            <i class="devicon-html5-plain"></i>
            <p className="icon-name">HTML5</p>
          </div>
          <div className="icons-child">
            <i class="devicon-css3-plain"></i>
            <p className="icon-name">CSS3</p>
          </div>
          <div className="icons-child">
            <i class="devicon-javascript-plain"></i>
            <p className="icon-name">JavaScript</p>
          </div>
          <div className="icons-child">
            <i class="devicon-react-plain"></i>
            <p className="icon-name">React</p>
          </div>
          <div className="icons-child">
            <i class="devicon-nodejs-plain"></i>
            <p className="icon-name">Node.js</p>
          </div>
          <div className="icons-child">
            <i class="devicon-express-original"></i>
            <p className="icon-name">Express</p>
          </div>
          <div className="icons-child">
            <i class="devicon-jquery-plain"></i>
            <p className="icon-name">jQuery</p>
          </div>
          <div className="icons-child">
            <i class="devicon-bootstrap-plain"></i>
            <p className="icon-name">Bootstrap</p>
          </div>
          <div className="icons-child">
            <i class="devicon-tailwindcss-original-wordmark"></i>
            <p className="icon-name">Tailwind CSS</p>
          </div>
          <div className="icons-child">
            <i class="devicon-postgresql-plain"></i>
            <p className="icon-name">PostgresSQL</p>
          </div>
          <div className="icons-child">
            <i class="devicon-firebase-plain"></i>
            <p className="icon-name">Firebase</p>
          </div>
          <div className="icons-child">
            <i class="devicon-git-plain"></i>
            <p className="icon-name">Git</p>
          </div>
          <div className="icons-child">
            <i class="devicon-github-original"></i>
            <p className="icon-name">Github</p>
          </div>
          <div className="icons-child">
            <i class="devicon-vscode-plain"></i>
            <p className="icon-name">VS Code</p>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#accdc6"
          fill-opacity="1"
          d="M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,117.3C672,107,768,149,864,144C960,139,1056,85,1152,58.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Skills;
