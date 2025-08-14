import axios from 'axios';

// Set your API base URL here
const appConfig = {
  apiBaseUrl: 'http://localhost:5234/api', // Change this to your backend API
};

// Create a reusable Axios instance
const apiClient = axios.create({
  baseURL: appConfig.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET request
export const getRequest = async (url, config = {}) => {
  try {
    const response = await apiClient.get(url, config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// POST request
export const postRequest = async (url, data, config = {}) => {
  try {
    const response = await apiClient.post(url, data, config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// PUT request
export const putRequest = async (url, data, config = {}) => {
  try {
    const response = await apiClient.put(url, data, config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// DELETE request
export const deleteRequest = async (url, config = {}) => {
  try {
    const response = await apiClient.delete(url, config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// Optional: parse message
export const parseIfJson = (response) => {
  if (typeof response === 'string') {
    try {
      return JSON.parse(response);
    } catch {
      return { message: response };
    }
  }
  return response.message || response;
};
