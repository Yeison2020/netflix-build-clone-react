import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import "./homeScreen.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";

function App() {
  const user = null;

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
