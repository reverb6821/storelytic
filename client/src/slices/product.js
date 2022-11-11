import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from '../services/productService'

const initialState = [];

export const createProduct = createAsyncThunk(
    "product/create",
    async ({ name, description, note, quantity, stock }) => {
      const res = await ProductService.create({ name, description, note, quantity, stock });
      return res.data;
    }
  );
  export const retrieveProducts = createAsyncThunk(
    "products/retrieve",
    async () => {
      const res = await ProductService.getAll();
      return res.data;
    }
  );
  export const updateProduct = createAsyncThunk(
    "product/update",
    async ({ id, data }) => {
      const res = await ProductService.update(id, data);
      return res.data;
    }
  );
  export const deleteProduct = createAsyncThunk(
    "product/delete",
    async ({ id }) => {
      await ProductService.remove(id);
      return { id };
    }
  );
  export const deleteAllProducts = createAsyncThunk(
    "products/deleteAll",
    async () => {
      const res = await ProductService.removeAll();
      return res.data;
    }
    
  );

  export const findProductByName = createAsyncThunk(
    "product/findByName",
    async ({ name }) => {
      const res = await ProductService.findByName(name);
      return res.data;
    }
  );

  const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: {
      [createProduct.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [retrieveProducts.fulfilled]: (state, action) => {
        return [...action.payload];
      },
      [updateProduct.fulfilled]: (state, action) => {
        const index = state.findIndex(product => product.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      },
      [deleteProduct.fulfilled]: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      },
      [deleteAllProducts.fulfilled]: (state, action) => {
        return [];
      },
    },
  });

  const { reducer } = productSlice;
  
  export default reducer;