import axios from 'axios';

const jobsApi = axios.create({
   baseURL: 'https://remotive.com/api/',
});

export default jobsApi;
