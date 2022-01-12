import { Route } from "react-router-dom";
import { useParams, NavLink, useHistory } from "react-router-dom";
import { useState, useEffect, lazy } from "react";
import { fetchFilmById, fetchFilms } from "../../source/api";
import s from "./MovieDetailsPage.module.css";
import { useRouteMatch } from "react-router-dom";
import {
  useFetchMoviesQuery,
  useDeleteMoviesMutation,
  useAddMoviesMutation,
  useGetMoviesQuery,
} from "../../redux/movies/moviesSlice";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);

  let history = useHistory();

  return (
    <div className="container">
      <button
        type="button"
        className="backBtn"
        onClick={() => history.goBack()}
      >
        Go back
      </button>
      {movie && (
        <div className={s.MovieCard}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt=""
            className={s.MoviePoster}
            width="200"
          />
          <div className={s.MovieDescription}>
            <h1>{movie.original_title}</h1>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
