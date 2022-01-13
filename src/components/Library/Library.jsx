import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { fetchSearchFilms } from "../../source/api";
import { Link } from "react-router-dom";
import s from "../../styles/MoviesList.module.css";

const Library = () => {
  const [q, setQ] = useState("");

  useEffect(() => {}, []);

  const handleChange = (event) => {
    setQ(event.target.value.toLowerCase());
  };

  return (
    <div className="container">
      <form>
        <input
          className="MoviesInput"
          type="text"
          value={q}
          placeholder="Search movie"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {/* <ul className={s.MoviesList}>
        {movies &&
          movies.results.map(({ original_title, id, poster_path }) => (
            <li key={id}>
              <Link to={`${id}`} className={s.MoviesListLink}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                  alt=""
                  width="200"
                />
                {original_title}
              </Link>
            </li>
          ))}
      </ul> */}
    </div>
  );
};

export default Library;
