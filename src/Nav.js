import React, { useState, useEffect } from "react";
import "./nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    // Cleaning return in useEffect hook
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    // Check here why I have the black background
    <div className={`nav ${show && " nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="nextflix-logo"
        />
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatarimage"
        />
      </div>
    </div>
  );
};

export default Nav;
