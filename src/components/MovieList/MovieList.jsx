import s from "./MoviesList.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  getMovie,
  addMovie,
  getCurrentMovie,
} from "../../redux/movies/moviesOperations";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [q, setQ] = useState("");
  const movies = useSelector((state) => state.movies.items.data);
  const dispatch = useDispatch();
  const currentMovie = useSelector((state) => state.movies.currentItem);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (currentMovie.length > 0) {
      const { title, year, format, actors } = currentMovie.data;
      dispatch(addMovie({ title, year, format, actors }));
    }
  }, [currentMovie, dispatch]);

  const handleClick = (e) => {
    if (e.target.textContent === "Add" || e.target.type === "button") {
      dispatch(getCurrentMovie(e.currentTarget.id));
    }

    if (
      e.target === e.currentTarget ||
      e.target.textContent === "Add" ||
      e.target.type === "button"
    )
      return false;
    dispatch(getMovie(e.currentTarget.id));
  };

  const handleChange = (e) => {
    setQ(e.target.value.toLowerCase());
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
            value={q}
            onChange={handleChange}
          />
        </label>

        <label>
          Enter actor name
          <br />
          <input
            className="MoviesInput"
            type="text"
            value={q}
            onChange={handleChange}
          />
        </label>
      </form>
      <ul className={s.MoviesList}>
        {movies &&
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
