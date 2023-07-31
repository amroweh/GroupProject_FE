import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import "./css/movie.css";
import MovieItem from "./MovieItem";

const MovieCard = (props) => {
  const locations = JSON.stringify(props.movie.locations);

  return (
    <>
      <div className="card col-md-4 card-gap custom-enlarge">
        <div className="card-body">
          <h5 className="card-title">{props.movie.title}</h5>
          <p className="card-text">{props.movie.description}</p>
          <p className="card-text">{props.movie.genre}</p>
          <p className="card-text">{locations}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
