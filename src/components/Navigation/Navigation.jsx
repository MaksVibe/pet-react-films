import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/auth/authOperations";
import s from "./Navigation.module.css";

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <nav className={s.UserNav}>
        <NavLink to="/" className={`${s.link} btn`}>
          Home
        </NavLink>
        <NavLink to="/movies" className={`${s.link} btn`}>
          Movies
        </NavLink>
      </nav>
      <button type="button" className="btn" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default Navigation;
