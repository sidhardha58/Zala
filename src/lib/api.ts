// src/lib/api.ts
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ change if deployed
  withCredentials: true, // if using cookies/sessions
});

export default API;
