import httpCommon from '../common/httpCommon';
import authHeader from './authHeader';

const getAll = () => {
    return httpCommon.get("/product", { headers: authHeader() });
  };
  
  const get = id => {
    return httpCommon.get(`/product/${id}`, { headers: authHeader() });
  };
  
  const create = data => {
    return httpCommon.post("/product", data, { headers: authHeader() });
  };
  
  const update = (id, data) => {
    return httpCommon.put(`/product/${id}`, data, { headers: authHeader() });
  };
  
  const remove = id => {
    return httpCommon.delete(`/product/${id}`, { headers: authHeader() });
  };
  
  const removeAll = () => {
    return httpCommon.delete(`/product`, { headers: authHeader() });
  };
  
  const findByTitle = title => {
    return httpCommon.get(`/product?title=${title}`, { headers: authHeader() });
  };
  
  const productService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
  };
  
  export default productService;