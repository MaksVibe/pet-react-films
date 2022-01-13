import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <header className="container">
      <nav className={s.AuthNav}>
        <NavLink to="login" className="btn">
          Login
        </NavLink>
        <NavLink to="register" className="btn">
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default AuthNav;
