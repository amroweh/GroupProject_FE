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

  // if (loading) {
  //   return <div>Loading...</div>;
  // } else
  //   return (
  //     <>
  //       <h4 style={{marginTop: "40px"}}>Recommended Movies</h4>
  //       <div className="movie-layout--container">
  //         <div className="moviecard-container col-md-12 col-sm-6">
  //           <div className="p-2 m-2 g-4 row">
  //             {movieData.map((movie) => (
  //               <MovieCard key={movie.movie_id} movie={movie} />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );


    return (
      <>
        <h4 style={{marginTop: "40px"}}>Recommended Movies</h4>
        <div className="recommendedMoviesContainer container">        
              {[1,2,3,4,5].map((movie, i) => (
                <MovieCard key={movie.movie_id} movie={movie} imageIndex={i}/>
              ))}
        </div>
      </>
    );
};



export default Movies;
