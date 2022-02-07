import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/v1";

const getData = (endpoint) => axios.get(endpoint);

const getMovie = (endpoint) => axios.get(endpoint);

const saveItem = (endpoint, item) => axios.post(endpoint, item);

const deleteItem = (endpoint, id) => axios.delete(`${endpoint}/${id}`);

export { getData, saveItem, deleteItem, getMovie };
