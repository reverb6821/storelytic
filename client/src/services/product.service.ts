import http from "../common/http-common";
import IProduct from "../interfaces/IProduct";

const getAll = () => {
  return http.get<Array<IProduct>>("/products/");
};

const get = (id: any) => {
  return http.get<IProduct>(`/products/${id}`);
};

const create = (data: IProduct) => {
  return http.post<IProduct>("/products", data);
};

const update = (id: any, data: IProduct) => {
  return http.put<any>(`/products/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/products/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/products`);
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