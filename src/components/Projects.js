import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="projects-container" id="projects">
        <img
          className="project-img"
          src={require("./flower2.png")}
          alt="sean-bitmoji"
          max-width="30%"
        />
        <h2 className="projects-header">List of Projects</h2>
        <p>These are my projects</p>
      </div>

      <svg
        className="project-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#eae7dc"
          fill-opacity="1"
          d="M0,160L480,288L960,96L1440,256L1440,0L960,0L480,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Projects;
