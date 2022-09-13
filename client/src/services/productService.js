import http from '../common/http';
import authHeader from './authHeader';

const getAll = () => {
    return http.get("/product", { headers: authHeader() });
  };
  
  const get = id => {
    return http.get(`/product/${id}`, { headers: authHeader() });
  };
  
  const create = data => {
    return http.post("/product", data, { headers: authHeader() });
  };
  
  const update = (id, data) => {
    return http.put(`/product/${id}`, data, { headers: authHeader() });
  };
  
  const remove = id => {
    return http.delete(`/product/${id}`, { headers: authHeader() });
  };
  
  const removeAll = () => {
    return http.delete(`/product`, { headers: authHeader() });
  };
  
  const findByName = name => {
    return http.get(`/product?Name=${name}`, { headers: authHeader() });
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