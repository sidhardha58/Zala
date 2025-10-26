// src/lib/api.ts
import axios from "axios";

const API = axios.create({
  baseURL: "https://zala-q5yw.onrender.com/api", // ✅ change if deployed
  withCredentials: true, // if using cookies/sessions
});

export default API;
