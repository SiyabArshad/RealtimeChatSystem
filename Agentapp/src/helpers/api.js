import axios from 'axios';
import origin from "./api"
const api = axios.create({
  baseURL: origin, 
  headers: {
    'Content-Type': 'application/json',
  },
});



export default api;