import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/auth/authOperations";
import s from "./Login.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const wrightEmail = email.match(
    /^([^-])([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{1,})$/i
  );

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
    if (!wrightEmail) {
      toast.warn("WRONG EMAIL.", {
        position: "top-center",
        autoClose: 5000,
        delay: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!wrightEmail || password.length === 0) return false;
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
        Please sign in or if you don't have an account,{" "}
        <Link to="/register" className="">
          sign up.
        </Link>
      </h3>
      <form onSubmit={handleSubmit} className={s.loginForm} noValidate>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            placeholder="your@email.com"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="btn">
          Sign in
        </button>
      </form>
    </div>
  );
}
