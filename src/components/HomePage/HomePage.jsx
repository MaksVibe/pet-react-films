import { Link } from "react-router-dom";
import s from "../../styles/MoviesList.module.css";
import { useState } from "react";
import {
  useFetchMoviesQuery,
  useGetMovieQuery,
} from "../../redux/movies/moviesSlice";

const HomePage = ({ films }) => {
  const [q, setQ] = useState("");
  // const [movies, setMovies] = useState({});
  // const [query, setQuery] = useState("");
  // const { url } = useRouteMatch();
  const fetchMovie = useFetchMoviesQuery();
  // const [addMovie] = useAddMoviesMutation();

  const handleSubmitInput = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setQ(e.target.value.toLowerCase());
  };

  const handleClick = (e) => {
    e.preventDefault();
    const movieId = e.target.parentNode.id;
    // getMovie(movieId);
    console.log(
      `getMovie`,
      fetchMovie.data.find((item) => item.id === movieId)
    );
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
        <button type="submit">Search</button>
      </form>
      <ul className={s.MoviesList}>
        {fetchMovie.data &&
          fetchMovie.data.map(({ title, id }) => (
            <li key={id} id={id} className={s.MoviesListItem}>
              <p>
                <Link to={`movies/${id}`} className={s.MoviesListLink}>
                  <span className={s.MovieId}>ID: {id}</span>
                  <br />
                  <span>{title}</span>
                </Link>
              </p>

              <button type="button" onClick={handleClick}>
                Add
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
