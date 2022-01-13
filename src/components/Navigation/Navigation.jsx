import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/auth/authOperations";
import s from "./Navigation.module.css";

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <header className="App-header">
      <div className={s.NavContainer}>
        <nav className={s.UserNav}>
          <NavLink to="/movies" className={`${s.link} btn`}>
            Movies
          </NavLink>
          <NavLink to="/library" className={`${s.link} btn`}>
            Library
          </NavLink>
        </nav>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navigation;
