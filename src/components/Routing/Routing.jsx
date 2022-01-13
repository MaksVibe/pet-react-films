import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { lazy } from "react";
import authSelectors from "../../redux/auth/authSelectors";

const UserNav = lazy(() => import("../UserNav/UserNav"));
const AuthNav = lazy(() => import("../AuthNav/AuthNav"));
const Login = lazy(() => import("../Login/Login"));
const Register = lazy(() => import("../Register/Register"));
const NotFound = lazy(() => import("../common/404NotFound"));
const HomePage = lazy(() => import("../HomePage/HomePage"));

const RoutesNav = () => {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLogedIn ? <UserNav /> : <AuthNav />}
      <Routes>
        <Route
          path="login"
          element={isLogedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="register"
          element={isLogedIn ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/"
          element={isLogedIn ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
};
export default RoutesNav;
