import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovie] = useState([]);
  const base_Url = `https://image.tmdb.org/t/p/original/`;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      {movies.map((movie) => {
        return (
          <img
            key={movie.id}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt="Images"
          />
        );
      })}
    </div>
  );
};

export default Row;
