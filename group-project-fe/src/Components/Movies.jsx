import React from "react";
import MovieCard from "./MovieCard";

const Movies = () => {
  return (
    <>
      <div className="movie-layout--container">
        <div className="movie-layout--article">
          <div className="moviecard-container container-md ">
            <div className="row p-2 m-2 g-4">
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
