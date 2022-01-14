import { Route } from "react-router-dom";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, lazy } from "react";
import s from "./MovieDetailsPage.module.css";
import { useSelector } from "react-redux";

const MovieDetailsPage = () => {
  const movie = useSelector((state) => state.movies.items);

  let navigate = useNavigate();

  return (
    <div className="container">
      <button type="button" className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
      {movie && (
        <div className={s.MovieCard}>
          <p>ID: {movie.id}</p>
          <h1>{movie.title}</h1>
          <p>Year of issue: {movie.year}</p>
          <p>Format: {movie.format}</p>
          {movie.actors && (
            <p>Cast: {movie.actors.map((actor) => actor.name).join(", ")}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
