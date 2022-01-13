import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("movies/filter_change");

export { changeFilter };
