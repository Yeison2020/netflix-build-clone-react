import React, { useState } from "react";
import SignInScreen from "./SignInScreen";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="logo-Screen-Background">
        <img
          className="login-Screen-Logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix-backgroundimage"
        ></img>
        <button className="signIn_btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen_gradient"></div>
        <div className="loginScreen_body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <React.Fragment>
              <h1>Unlimited films, Tv programs and more.</h1>
              <h2>Watch any where. Cancel any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                account
              </h3>
              <div className="logScreen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button className="login_btn" onClick={() => setSignIn(true)}>
                    Get Started
                  </button>
                </form>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
