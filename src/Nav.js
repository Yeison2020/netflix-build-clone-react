import React, { useState } from "react";
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
  return (
    <div className="nav nav_black">
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="nextflix-log"
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
