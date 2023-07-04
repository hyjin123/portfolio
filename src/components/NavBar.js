import React, { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Burger from "./Burger";
import Menu from "./Menu";

function NavBar() {
  // used to toggle hambuger in and out based on click
  const [style, setStyle] = useState("style1");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const node = useRef(null);

  // below code allows users to click outside the menu to close the menu
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (node.current && !node.current.contains(event.target)) {
      setStyle("style1");
    }
  };

  return (
    <div className="link-container">
      <div className="name">Sean Jin</div>
      <div ref={node}>
        <Burger
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
          style={style}
          setStyle={setStyle}
        />
        <Menu style={style} />
      </div>
    </div>
  );
}

export default NavBar;
