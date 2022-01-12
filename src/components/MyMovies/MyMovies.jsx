import React from "react";
import { useGetMovieQuery } from "../../redux/movies/moviesSlice";

const MyMovies = () => {
  const getMovie = useGetMovieQuery();
  return <div className="container">Here My Movies</div>;
};

export default MyMovies;
