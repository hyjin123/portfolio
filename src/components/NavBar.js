import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Burger from "./Burger";
import Menu from "./Menu";

function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [style, setStyle] = useState("style1");

  return (
    <div className="link-container">
      <div className="name">Sean Jin</div>
      <Burger
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
        style={style}
        setStyle={setStyle}
      />
      <Menu
        hamburgerOpen={hamburgerOpen}
        setHamburgerOpen={setHamburgerOpen}
        style={style}
      />
    </div>
  );
}

export default NavBar;
