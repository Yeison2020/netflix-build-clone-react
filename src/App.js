import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import "./homeScreen.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import { auth } from "./firebase";

function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
      } else {
        console.log("logOut");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {!user ? (
            <Route path="/login" element={<LoginScreen />} />
          ) : (
            <Route path="/" element={<HomeScreen />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
