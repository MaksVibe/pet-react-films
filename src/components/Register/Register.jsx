import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import s from "./Register.module.css";
import { Link } from "react-router-dom";
export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "pass":
        setPass(e.target.value);
        break;
      case "confirmPass":
        setConfirmPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPass("");
    setConfirmPassword("");
  };

  return (
    <div className={s.signupContainer}>
      <h3 className={s.signupH}>
        Please sign up or if you have an account,{" "}
        <Link to="/login">Log in</Link>
      </h3>
      <form onSubmit={handleSubmit} className={s.signupForm}>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          onChange={handleChange}
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          // pattern=".+@globex.com"
          title="Please Provide A Valid Email Address !"
          required
        />
        <input
          onChange={handleChange}
          value={password}
          type="password"
          name="pass"
          placeholder="Password"
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
          title="Please Provide A Valid Email Address !"
          required
        />
        <input
          onChange={handleChange}
          value={confirmPassword}
          type="password"
          name="confirmPass"
          placeholder="Confirm password"
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
          title="Please Provide A Valid Email Address !"
          required
        />
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
