import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Menu.css";

function Menu({ style }) {
  return (
    <nav className={style}>
      <HashLink
        className="hashlink"
        to="#home"
        scroll={(el) =>
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      >
        Home
      </HashLink>
      <HashLink
        className="hashlink"
        to="#about"
        scroll={(el) =>
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      >
        About
      </HashLink>
      <HashLink
        className="hashlink"
        to="#skills"
        scroll={(el) =>
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      >
        Skills
      </HashLink>
      <HashLink
        className="hashlink"
        to="#projects"
        scroll={(el) =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      >
        Projects
      </HashLink>
      <HashLink
        className="hashlink"
        to="#contact"
        scroll={(el) =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      >
        Contact
      </HashLink>
    </nav>
  );
}

export default Menu;
