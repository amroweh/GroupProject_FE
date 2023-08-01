import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./css/movie.css";
import MovieItem from "./MovieItem";

const MovieCard = (props) => {
  // grabs the locations from the props and converts to a JSON object
  const locations = JSON.stringify(props.movie.locations);

  //locations for each film is sent as part of the Link element which links a card to a movie
  return (
    <Link
      to={`/${props.movie.movie_id}/plan`}
      state={locations}
      className="col-md-6"
    >
      <div className="card card-gap custom-enlarge">
        <div className="card-body">
          <h5 className="card-title">
            <em>
              <strong>{props.movie.title}</strong>
            </em>
          </h5>
          <p className="card-text">{props.movie.description}</p>
          <p className="card-text">{props.movie.genre}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
