import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/auth/authOperations";
import s from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.length || !password.length) return false;
    dispatch(login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.loginContainer}>
      <h3 className={s.loginHeading}>
        Please sign in or if don't have an account,{" "}
        <Link to="/register" className="">
          sign up
        </Link>
      </h3>
      <form onSubmit={handleSubmit} className={s.loginForm}>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="btn">
          Sign in
        </button>
      </form>
    </div>
  );
}
