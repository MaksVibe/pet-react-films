import s from "./MoviesList.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  importMovies,
  getMovie,
  addMovie,
  deleteMovie,
} from "../../redux/movies/moviesOperations";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const settings = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const MovieList = ({ isLibrary }) => {
  const [movieQ, setMovieQ] = useState("");
  const [actorQ, setActorQ] = useState("");

  let movies = useSelector((state) => state.movies.data.items);
  let libMovies = useSelector((state) => state.movies.data.libraryItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(importMovies());
  }, [dispatch]);

  const handleClick = (e) => {
    if (e.target.textContent === "Add" && e.target.type === "button") {
      if (libMovies.some((movie) => movie.id === e.currentTarget.id))
        return alert("Movie already added");
      dispatch(addMovie(e.currentTarget.id));
      toast.success("🦄 Movie added!", settings);
      return;
    }
    if (e.target.textContent === "Delete" && e.target.type === "button") {
      // dispatch(deleteMovie(e.currentTarget.id));
      // toast.success("🦄 Movie added!", settings);
      return;
    }
    dispatch(getMovie(e.currentTarget.id));
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "movieQ":
        setMovieQ(e.target.value.toLowerCase());
        break;
      case "actorQ":
        setActorQ(e.target.value.toLowerCase());
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <form className={s.MoviesListForm}>
        <label>
          Enter movie title
          <br />
          <input
            className="MoviesInput"
            type="text"
            value={movieQ}
            id="movieQ"
            onChange={handleChange}
          />
        </label>

        <label>
          Enter actor name
          <br />
          <input
            className="MoviesInput"
            type="text"
            value={actorQ}
            id="actorQ"
            onChange={handleChange}
          />
        </label>
      </form>
      <ul className={s.MoviesList}>
        {!isLibrary
          ? libMovies &&
            libMovies.map(({ title, id }) => (
              <li
                key={id}
                id={id}
                className={s.MoviesListItem}
                onClick={handleClick}
              >
                <p>
                  <Link to={`/movies/${id}`} className={s.MoviesListLink}>
                    <span>{title}</span>
                    <br />
                    <span className={s.MovieId}>ID: {id}</span>
                  </Link>
                </p>

                <button type="button" className="btn">
                  Delete
                </button>
              </li>
            ))
          : movies &&
            movies.map(({ title, id }) => (
              <li
                key={id}
                id={id}
                className={s.MoviesListItem}
                onClick={handleClick}
              >
                <p>
                  <Link to={`${id}`} className={s.MoviesListLink}>
                    <span>{title}</span>
                    <br />
                    <span className={s.MovieId}>ID: {id}</span>
                  </Link>
                </p>

                <button type="button" className="btn">
                  Add
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default MovieList;
