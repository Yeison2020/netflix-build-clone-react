import React from "react";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <div className="log-Screen-Background">
        <img
          className="login-Screen-Logo"
          src="https://www.abc.net.au/reslib/201411/r1359013_19091601.jpg"
          alt="netflix-backgroundimage"
        ></img>
        <button className="signIn_btn">Sign In</button>
      </div>
    </div>
  );
};

export default LoginScreen;
