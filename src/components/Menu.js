import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Menu.css";

function Menu({ hamburgerOpen, setHamburgerOpen, style }) {
  return (
    <nav className={style}>
      <HashLink
        className="hashlink"
        to="#home"
        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
      >
        Home
      </HashLink>
      <HashLink
        className="hashlink"
        to="#about"
        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
      >
        About
      </HashLink>
      <HashLink
        className="hashlink"
        to="#projects"
        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
      >
        Projects
      </HashLink>
      <HashLink
        className="hashlink"
        to="#contact"
        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
      >
        Contact
      </HashLink>
    </nav>
  );
}

export default Menu;
