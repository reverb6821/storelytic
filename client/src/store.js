import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import productReducer from './slices/product'

const reducer = {
  auth: authReducer,
  message: messageReducer,
  products: productReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;