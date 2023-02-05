import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth.slices'
import messageReducer from './slices/message.slices'

const reducer = {
  auth: authReducer,
  message: messageReducer
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});