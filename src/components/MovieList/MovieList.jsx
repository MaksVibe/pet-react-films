import s from "./MoviesList.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  getMovie,
  addMovie,
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

const MovieList = () => {
  const [movieQ, setMovieQ] = useState("");
  const [actorQ, setActorQ] = useState("");
  const movies = useSelector((state) => state.movies.data.items);
  const dispatch = useDispatch();
  const currentMovie = useSelector((state) => state.movies.currentItem);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // useEffect(() => {
  //   if (currentMovie.length > 0) {
  //     const movie = currentMovie.data;
  //     dispatch(addMovie(movie));
  //   }
  // }, [currentMovie, dispatch]);

  const handleClick = (e) => {
    if (e.target.textContent === "Add" && e.target.type === "button") {
      dispatch(addMovie(e.currentTarget.id));
      toast.success("🦄 Movie added!", settings);
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
