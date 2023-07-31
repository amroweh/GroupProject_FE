import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const getMoviesLocations = async () => {
  try {
    const res = await axios.get("http://18.130.102.78:8082/movies");
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

// this component needs to make a call to the backend code and retrieve a list of movies and locations.
const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMoviesLocations()
      .then((data) => {
        setMovieData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="movie-layout--container">
        <div className="movie-layout--article">
          <div className="moviecard-container container-md ">
            <div className="row p-2 m-2 g-4">
              {/* {movieData.map((movie) => (
                <div key={movie.movie_id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.description}</p>
                  <p>{movie.genre}</p>
                  <p>{JSON.stringify(movie.locations)}</p>
                </div>
              ))} */}
              {movieData.map((movie) => {
                return <MovieCard key={movie.movie_id} movie={movie} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
