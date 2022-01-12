import Navigation from "../Navigation/Navigation";
import { useSignInMutation } from "../../redux/api/api";
import UserNav from "../UserNav/UserNav";
import { useState, useEffect } from "react";

const AppBar = () => {
  const [signIn, result] = useSignInMutation();
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(`status`, result.status);
  console.log(`loggedIn`, loggedIn);
  useEffect(() => {
    if (result.status === "fulfilled") {
      setLoggedIn(true);
    }
  }, [result.status]);

  return (
    <header className="App-header">
      {!loggedIn && <Navigation />}
      {/* <Navigation /> */}
      {loggedIn && <UserNav />}
    </header>
  );
};
export default AppBar;
