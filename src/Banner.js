import React, { useState, useEffect } from "react";
import "./banner.css";

const Banner = () => {
  // This function truncate the amount of characters in the text
  const [movie, setMovie] = useState([]);

  useEffect(() => {}, []);
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        background: "cover",
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
          <h1 className="banner_description">
            {truncate(`This is the test description`, 150)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
};

export default Banner;
