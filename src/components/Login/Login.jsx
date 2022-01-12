import { useEffect, useState } from "react";
import { useSignInMutation } from "../../redux/api/api";
import { addToken } from "../../redux/movies/moviesSlice";
import { useDispatch } from "react-redux";
import { token } from "../../redux/auth/authOperations";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, result] = useSignInMutation();
  //   const dispatch = useDispatch();

  //   const [loggedIn, setLoggedIn] = useState(false);
  //   console.log(`status`, result.status);
  //   console.log(`loggedIn`, loggedIn);
  useEffect(() => {
    if (result.status === "fulfilled") {
      //   dispatch(addToken(result.data.token));
      token.set(result.data.token);
    }
  }, [result.status]);

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
    signIn({ email, password });
    // setLoggedIn(true);
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
        <button>Sign in</button>
      </form>
    </div>
  );
}
