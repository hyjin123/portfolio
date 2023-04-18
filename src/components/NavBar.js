import React from "react";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="link-container">
      <div className="name">Sean Jin</div>
      <div>
        <HashLink
          className="link"
          to="#home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Home
        </HashLink>
        <HashLink
          className="link"
          to="#about"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          About
        </HashLink>
        <HashLink
          className="link"
          to="#projects"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Projects
        </HashLink>
        <HashLink
          className="link"
          to="#contact"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          Contact
        </HashLink>
      </div>
    </div>
  );
}

export default NavBar;
