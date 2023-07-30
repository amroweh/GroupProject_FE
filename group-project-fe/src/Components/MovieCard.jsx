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

const MovieCard = () => {
  return (
    <>
      <div className="card col-md-4 card-gap custom-enlarge">
        <div className="card-body">
          <h5 className="card-title">Movie title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>

    // <Routes>
    //   <Route
    //     className="card col-md-4 card-gap custom-enlarge"
    //     id="card-component"
    //     element={<MovieItem />}
    //   >
    //     <>
    //       {/* <div class="card col-md-4 card-gap custom-enlarge"> */}
    //       <div className="card-body">
    //         <h5 className="card-title">Movie title</h5>
    //         <p className="card-text">
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </p>
    //       </div>
    //       {/* </div> */}
    //     </>
    //   </Route>
    // </Routes>
  );
};

export default MovieCard;
