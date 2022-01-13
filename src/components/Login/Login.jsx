import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperations";

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
    dispatch(login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Sign in
        </button>
      </form>
    </div>
  );
}
