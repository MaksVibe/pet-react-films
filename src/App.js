import "./App.css";
import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refresh } from "./redux/auth/authOperations";
const Routing = lazy(() => import("./components/Routing/Routing"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={"...loading"}>
        <Routing />
      </Suspense>
    </div>
  );
}

export default App;
