import axios from "axios";
import authHeader from './authHeader';

const API_URL = "http://localhost:8080/api/v1";

const getAll = () => {
    return axios.get(`${API_URL}/product/`, { headers: authHeader() });
  };
  
  const get = id => {
    return axios.get(`${API_URL}/product/${id}`, { headers: authHeader() });
  };
  
  const create = data => {
    return axios.post(`${API_URL}/product/`, data, { headers: authHeader() });
  };
  
  const update = (id, data) => {
    return axios.put(`${API_URL}/product/${id}`, data, { headers: authHeader() });
  };
  
  const remove = id => {
    return axios.delete(`${API_URL}/product/${id}`, { headers: authHeader() });
  };
  
  const removeAll = () => {
    return axios.delete(`${API_URL}/product/`, { headers: authHeader() });
  };
  
  const findByName = name => {
    return axios.get(`${API_URL}/product?Name=${name}`, { headers: authHeader() });
  };
  
  const productService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByName
  };
  
  export default productService;