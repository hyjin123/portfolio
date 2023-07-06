import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Menu.css";

function Menu({ style }) {
  return (
    <nav className={style}>
      <HashLink
        className={`hashlink hashlink${style}a`}
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
        className={`hashlink hashlink${style}b`}
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
        className={`hashlink hashlink${style}c`}
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
        className={`hashlink hashlink${style}d`}
        to="#projects"
        scroll={(el) =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      >
        Projects
      </HashLink>
      <HashLink
        className={`hashlink hashlink${style}e`}
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
