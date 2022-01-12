import React from "react";
import { useState } from "react";
import { useCreateUserMutation } from "../../redux/api/api";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const [createUser] = useCreateUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({ name, email, password, confirmPassword });
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
    <div>
      <h1>
        Please sign up or if you have an account, <p>Log in</p>
      </h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
