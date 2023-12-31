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

  const getMovieImageFromIndex = (i)=>{
    switch (i) {
      case 0:
      return "TGF.webp"
      case 1: 
      return "TDK.jpg"
      case 2: 
      return "SL.jpg"
      case 3:
      return "Inc.jpg"
      case 4:
      return "TLOTR.jpeg"      
    
      default:
        return "TDK.jpg";
    }
  }

  //locations for each film is sent as part of the Link element which links a card to a movie
  return (
    <div className="movieCard">
        <img className="movieImage" src={"/"+getMovieImageFromIndex(props.imageIndex)} alt="" />
        <div className="movieDetails">
          <h3 className="movieTitle">{props.movie.title}</h3>
          <i className="movieGenre">{props.movie.genre}</i>
          <h6><b>SUMMARY</b></h6>
          <p>{props.movie.description}</p>
          <Link to={`/${props.movie.movie_id}/plan`} state={locations} style={{all: "unset"}}>            
            <div>
              <div className="movieButton">View Filming Locations</div>
            </div>
          </Link>
        </div>
    </div>
  );
};

export default MovieCard;
