import React, { useState, useEffect } from "react";
import "./banner.css";
import requests from "./Resquest";
import axios from "./axios";

const Banner = () => {
  // This function truncate the amount of characters in the text
  const [movie, setMovie] = useState([]);
  let image = movie?.backdrop_path;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        background: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${image}`,
        backgroundPosition: `center center`,
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{movie?.original_title || movie?.name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
          <h1 className="banner_description">
            {truncate(movie.overview, 150)}
          </h1>
        </div>
        <div className="banner_fadeBottom" />
      </div>
    </header>
  );
};

export default Banner;
