import http from "../common/http-common";
import IProduct from "../interfaces/IProduct";
import authHeader from './auth-header';
const getAll = () => {
  return http.get<Array<IProduct>>("/products/", { headers: authHeader() });
};

const get = (id: any) => {
  return http.get<IProduct>(`/products/${id}`, { headers: authHeader() });
};

const create = (data: IProduct) => {
  return http.post<IProduct>("/products", data, { headers: authHeader() });
};

const update = (id: any, data: IProduct) => {
  return http.put<any>(`/products/${id}`, data, { headers: authHeader() });
};

const remove = (id: any) => {
  return http.delete<any>(`/products/${id}`, { headers: authHeader() });
};

const removeAll = () => {
  return http.delete<any>(`/products`, { headers: authHeader() });
};

const findByName = (name: string) => {
  return http.get<Array<IProduct>>(`/products?name=${name}`);
};

const ProductService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default ProductService;