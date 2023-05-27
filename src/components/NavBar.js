import React from "react";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="link-container">
      <div className="name">Sean Jin</div>
      <button className="hamburger-button">
        <div className="hamburger-div"></div>
        <div className="hamburger-div"></div>
        <div className="hamburger-div"></div>
      </button>
      <div>
        {/* <HashLink
          className="link"
          to="#home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "end" })
          }
        >
          Home
        </HashLink>
        <HashLink
          className="link"
          to="#about"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "end" })
          }
        >
          About
        </HashLink>
        <HashLink
          className="link"
          to="#projects"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "end" })
          }
        >
          Projects
        </HashLink>
        <HashLink
          className="link"
          to="#contact"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "end" })
          }
        >
          Contact
        </HashLink> */}
      </div>
    </div>
  );
}

export default NavBar;
