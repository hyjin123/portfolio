import React from "react";
import "./Burger.css";

function Burger({ hamburgerOpen, setHamburgerOpen, style, setStyle }) {
  // style1 is when the hamburger is closed, style2 is when the hamburger is opened
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
      <div className={`hamburger-div-${style}`}></div>
      <div className={`hamburger-div-${style}`}></div>
      <div className={`hamburger-div-${style}`}></div>
    </button>
  );
}

export default Burger;
