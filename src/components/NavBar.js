import React from "react";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="link-container">
      <div className="name">Sean Jin</div>
      <div>
        <HashLink className="link" to="#about" smooth>
          About
        </HashLink>
        <HashLink className="link" to="#projects" smooth>
          Projects
        </HashLink>
        <HashLink className="link" to="#contact" smooth>
          Contact
        </HashLink>
      </div>
    </div>
  );
}

export default NavBar;
