import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:8000/api/v1";
// const BASE_URL = process.env.REACT_APP_FIREBASE_URL;
// const API_KEY = process.env.REACT_APP_FIREBASE_KEY;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Baerer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
