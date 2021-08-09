import axios from 'axios';
import { getAuthToken } from './getAuthToken';

const headers: Record<string, string> = {
  'accept': 'application/json',
  'content-type': 'application/json'
};

const token = getAuthToken();

if (token) {
  headers['Authorization'] = `Token ${token}`;
}

export const client = axios.create({
  baseURL: 'http://emphasoft-test-assignment.herokuapp.com/',
  headers
});

export const updateClient = () => {
  const token = getAuthToken();
  client.defaults.headers['Authorization'] = `Token ${token}`;
};

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
