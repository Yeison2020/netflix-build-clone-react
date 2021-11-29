import React from "react";
import "./SignScreen.css";

const SignInScreen = () => {
  return (
    <div className="signScree">
      <form>
        <h1>Sign In</h1>
        <input placeolder="Email" type="email" />
        <input placeholder="Password" type="Password" />
      </form>
    </div>
  );
};

export default SignInScreen;
