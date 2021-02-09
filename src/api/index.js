import axios from "axios";

const url = "http://localhost:8000/items";

export const fetchItems = () => axios.get(url);
