import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: baseURL
}); 

export const fetchJobs = async () => {
    const { data } = await api.get('JobList?page=1&limit=4');
    return data.results;
  };