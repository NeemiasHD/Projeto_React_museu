import axios from "axios";

const itemFetch = axios.create({
  baseURL: "https://525f-2804-d59-b336-8300-3437-f73a-7b73-a6ac.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  }, 
});
export default itemFetch;
