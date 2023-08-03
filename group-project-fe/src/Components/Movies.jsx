import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./css/movie.css";

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

  if (loading) {
    return <img style={{width: "25px", marginTop: "20px"}} src="/loading.gif"></img>
  } else
    return (
      <>
        <h4 style={{marginTop: "40px"}}>Recommended Movies</h4>
        <div className="recommendedMoviesContainer container">        
              {movieData.map((movie, i) => (
                <MovieCard key={movie.movie_id} movie={movie} imageIndex={i}/>
              ))}
        </div>
      </>
    );
};



export default Movies;
