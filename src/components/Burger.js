import React from "react";
import "./Burger.css";

function Burger({ hamburgerOpen, setHamburgerOpen, style, setStyle }) {
  return (
    <button
      className="hamburger-button"
      onClick={() => {
        setHamburgerOpen(!hamburgerOpen);
        if (style === "style2") {
          setStyle("style1");
        } else {
          setStyle("style2");
        }
      }}
    >
      <div className="hamburger-div"></div>
      <div className="hamburger-div"></div>
      <div className="hamburger-div"></div>
    </button>
  );
}

export default Burger;
