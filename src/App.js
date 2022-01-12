import "./App.css";
import { fetchFilms } from "./source/api";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

const MyMovies = lazy(() => import("./components/MyMovies/MyMovies"));
const AppBar = lazy(() => import("./components/AppBar/AppBar"));
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./components/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage")
);
const NotFound = lazy(() => import("./components/common/404NotFound"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={"...loading"}>
        <AppBar />
        <Register />
        <Login />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/my-movies" exact>
            <MyMovies />
          </Route>

          <Route path="/movies/:moviesId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
