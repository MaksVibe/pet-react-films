import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <header className="App-header">
      <nav className={s.AuthNav}>
        <NavLink to="login" className="btn">
          Sing in
        </NavLink>
        <NavLink to="register" className="btn">
          Sign up
        </NavLink>
      </nav>
    </header>
  );
};

export default AuthNav;
