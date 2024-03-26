import axios from "axios";

const itemFetch = axios.create({
  baseURL: "https://localhost:7107",
  headers: {
    "Content-Type": "application/json",
  }, 
});
export default itemFetch;