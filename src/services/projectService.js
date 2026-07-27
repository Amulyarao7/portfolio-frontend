import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8082/api/projects";

export const getProjects = () => {
    return axios.get(REST_API_BASE_URL);
};