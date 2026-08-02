import axios from "axios";

const REST_API_BASE_URL =
  "https://portfolio-backend-production-9dd5.up.railway.app/api/projects";

export const getProjects = () => {
  return axios.get(REST_API_BASE_URL);
};