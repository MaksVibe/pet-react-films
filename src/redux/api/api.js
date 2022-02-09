import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/v1";

const getData = (endpoint) => axios.get(endpoint);

const importData = (endpoint, movies) => axios.post(endpoint, movies);

const getMovie = (endpoint) => axios.get(endpoint);

const saveItem = (endpoint, item) => axios.post(endpoint, item);

const deleteItem = (endpoint, id) => axios.delete(`${endpoint}/${id}`);

export { getData, importData, saveItem, deleteItem, getMovie };
