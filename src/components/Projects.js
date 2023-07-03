import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="projects-container" id="projects">
        <h2 className="projects-header">List of Projects</h2>
        <p>These are my projects</p>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eae7dc"
          fill-opacity="1"
          d="M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,117.3C672,107,768,149,864,144C960,139,1056,85,1152,58.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Projects;
