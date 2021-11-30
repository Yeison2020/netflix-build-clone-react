import React from "react";
import "./SignScreen.css";

const SignInScreen = () => {
  return (
    <div className="signScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="Password" />
        <button type="submit">Sign In</button>

        <h4>
          <span className="signUp_color_gray">New to Netflix? </span>{" "}
          <span className="signupScreen_link">Sign Up</span>
          now.
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
