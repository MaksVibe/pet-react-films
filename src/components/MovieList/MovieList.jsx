import s from "./MoviesList.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/movies/moviesOperations";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [q, setQ] = useState("");
  const movies = useSelector((state) => state.movies.items.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleSubmitInput = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setQ(e.target.value.toLowerCase());
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmitInput}>
        <input
          className="MoviesInput"
          type="text"
          value={q}
          placeholder="Search movie"
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      <ul className={s.MoviesList}>
        {movies &&
          movies.map(({ title, id }) => (
            <li key={id} id={id} className={s.MoviesListItem}>
              <p>
                <Link to={`${id}`} className={s.MoviesListLink}>
                  <span className={s.MovieId}>ID: {id}</span>
                  <br />
                  <span>{title}</span>
                </Link>
              </p>

              <button type="button">Add</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
