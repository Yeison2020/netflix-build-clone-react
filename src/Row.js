import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
    </div>
  );
};

export default Row;
