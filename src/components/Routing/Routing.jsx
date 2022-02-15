import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { lazy } from "react";
import authSelectors from "../../redux/auth/authSelectors";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";

const AuthNav = lazy(() => import("../AuthNav/AuthNav"));
const Login = lazy(() => import("../Login/Login"));
const Register = lazy(() => import("../Register/Register"));
const NotFound = lazy(() => import("../common/404NotFound"));
const MovieList = lazy(() => import("../MovieList/MovieList"));
const Navigation = lazy(() => import("../Navigation/Navigation"));

const RoutesNav = () => {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLogedIn ? <Navigation /> : <AuthNav />}
      <Routes>
        <Route
          path="/pet-react-films"
          element={<Navigate replace to="/login" />}
        />
        <Route
          path="/login"
          element={isLogedIn ? <Navigate to="/movies" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLogedIn ? <Navigate to="/movies" /> : <Register />}
        />
        <Route
          path="/movies"
          element={isLogedIn ? <MovieList /> : <Navigate to="/login" />}
        />
        <Route
          path="/library"
          element={
            isLogedIn ? (
              <MovieList isLibrary={true} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/movies/:moviesId"
          element={isLogedIn ? <MovieDetailsPage /> : <Navigate to="/login" />}
        />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
};
export default RoutesNav;
