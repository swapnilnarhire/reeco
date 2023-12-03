import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './orderReducer'

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
})